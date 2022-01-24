<template>
  <div>
    <section id="PopularMovie" class="mainMovie">
      <h2>Voici le projet Films populaires</h2>
      <article>
        <h3>Les films populaires aujourd'hui</h3>
        <div class="card">
          <div class="row">
            <button class="buttonPrev" v-on:click="prevMovie">Précedent</button>
            <div id="thisMovie" class="cardMovie">
              <a class="bigTitle" v-bind:href="'https://www.themoviedb.org/movie/' + currentMovie.id">{{
                currentMovie.title
              }}</a>
              <p class="movieRelease">Date de sortie : {{ currentMovie.release_date }}</p>
              <a v-bind:href="'https://www.themoviedb.org/movie/' + currentMovie.id"
                ><img class="imgMovie" v-bind:src="'https://image.tmdb.org/t/p/w500' + currentMovie.poster_path"
              /></a>
              <p class="movieOverview">{{ currentMovie.overview }}</p>
            </div>
            <button class="buttonNext" v-on:click="nextMovie">Suivant</button>
          </div>
        </div>
      </article>
    </section>
  </div>
</template>

<script>
export default {
  name: "PopularMovie",
  el: "#PopularMovie",
  data() {
    return {
      api: "e028393038dfe6a52629676f2b30f143",
      popularMovies: "",
      compteur: 0, //For slider
      maxCompteur: 0, //His value = total films value of API return (for slider)
      currentMovie: {},
    };
  },
  mounted() {
    this.popularMovies = "";
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${this.api}&language=fr&page=1`)
      .then((fetchresults) => {
        return fetchresults.json();
      })
      .then((fetchresultsJSON) => {
        this.setPopularMovie(fetchresultsJSON);
        this.defineCurrentMovie();
      });
  },

  methods: {
    setPopularMovie(results) {
      this.popularMovies = results.results;
      this.maxCompteur = this.popularMovies.length;
    },
    prevMovie() {
      if (this.compteur == 0) {
        this.compteur = this.maxCompteur - 1;
      } else {
        this.compteur--;
      }
      this.defineCurrentMovie();
      document
        .getElementById("thisMovie")
        .animate([{ transform: "translateX(-750px)" }, { transform: "translateX(0px)" }], {
          duration: 300,
        });
    },
    nextMovie() {
      if (this.compteur == this.maxCompteur - 1) {
        this.compteur = 0;
      } else {
        this.compteur++;
      }
      this.defineCurrentMovie();

      document
        .getElementById("thisMovie")
        .animate([{ transform: "translateX(750px)" }, { transform: "translateX(0px)" }], {
          duration: 300,
        });
    },
    defineCurrentMovie() {
      this.currentMovie = this.popularMovies[this.compteur];
    },
  },
};
</script>

<style scoped>
.imgMovie {
  margin: auto;
  width: 80%;
  border-radius: 1rem;
}
.bigTitle {
  font-weight: bold;
  text-decoration: underline;
  color: var(--color-black-header);
  font-size: 1.5rem;
}
.bigTitle:hover {
  color: var(--color-lightgrey);
}
.row {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-content: center;
  flex-wrap: wrap;
  overflow: hidden;
  background-color: var(--color-white-header);
  padding: 1rem;
  border-radius: var(--border-radius-xsmall);
  box-shadow: var(--box-shadow-default);
  margin: 0.5rem;
  text-align: center;
  width: 100%;
}
.cardMovie {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: var(--color-lightgrey);
  border-radius: var(--border-radius-small);
  box-shadow: var(--box-shadow-default);
  padding: 0.5rem;
  margin: 0.5rem;
  width: 55%;
}
.movieRelease {
  padding: 1rem;
  font-size: 1.2rem;
}
.movieOverview {
  width: 85%;
  font-size: 1rem;
  margin: auto;
}
.buttonPrev {
  font-size: 1.2rem;
  text-shadow: #4c974c 2px 0 0;
  color: var(--color-white-header);
  background-color: #5cb85c;
  border: 3px solid #4c974c;
  border-left: 3px solid #4c974c;
  border-radius: var(--border-radius-xsmall);
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  width: 20%;
  margin-bottom: auto;
  padding: 1rem;
}
.buttonNext {
  font-size: 1.2rem;
  text-shadow: #4c974c 2px 0 0;
  color: var(--color-white-header);
  background-color: #5cb85c;
  border: 3px solid #4c974c;
  border-left: 3px solid #4c974c;
  border-radius: var(--border-radius-xsmall);
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  width: 20%;
  margin-bottom: auto;
  padding: 1rem;
}
.buttonPrev:hover,
.buttonNext:hover {
  background-color: #4c974c;
  border: 3px solid #5cb85c;
  border-left: 3px solid #5cb85c;
  text-shadow: none;
}
</style>
