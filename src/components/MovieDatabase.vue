<template>
  <div>
    <section id="MovieSearch" class="mainMovie">
      <h2>Voici le projet Films / Séries</h2>
      <article>
        <h3>La recherche de film / séries</h3>
        <div class="card">
          <div class="inputMovie">
            <!--Search TV Show-->
            <input
              type="text"
              name="tvShowName"
              id="tvShowName"
              placeholder="Nom de la série..."
              v-model="tvShowName"
              v-on:keyup.enter="getTVshow"
            />
            <button v-on:click="getTVshow"><i class="fas fa-search fa-1x"></i></button>

            <!--Search Movie-->
            <input
              type="text"
              name="movieName"
              id="movieName"
              placeholder="Nom du film..."
              v-model="movieName"
              v-on:keyup.enter="getMovie"
            />
            <button v-on:click="getMovie"><i class="fas fa-search fa-1x"></i></button>
          </div>
          <!--Display results-->
          <div class="showMovie" v-for="result in results.results" :key="result.id">
            <p class="movieTitle">
              {{ result.title }}{{ result.name }}<br />Date de sortie : {{ result.release_date
              }}{{ result.first_air_date }}
            </p>
            <a v-if="result.first_air_date == undefined" v-bind:href="'https://www.themoviedb.org/movie/' + result.id"
              ><img class="imgMovie" v-bind:src="'https://image.tmdb.org/t/p/w500' + result.poster_path"
            /></a>
            <a v-else v-bind:href="'https://www.themoviedb.org/tv/' + result.id"
              ><img class="imgMovie" v-bind:src="'https://image.tmdb.org/t/p/w500' + result.poster_path"
            /></a>
            <p>Note : {{ result.vote_average }}/10</p>
            <p>Total des votes : {{ result.vote_count }}</p>
            <p>
              Synopsis : <br />
              {{ result.overview }}
            </p>
          </div>
        </div>
      </article>
    </section>
  </div>
</template>

<script>
export default {
  name: "Movie",
  el: "#MovieSearch",
  data() {
    return {
      movieName: "",
      tvShowName: "",
      api: "e028393038dfe6a52629676f2b30f143",
      results: "",
      popularMovies: "",
    };
  },
  methods: {
    // Get API informations for Movies
    getMovie() {
      this.results = "";
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=${this.api}&language=fr&query=${this.movieName}`)
        .then((fetchresults) => {
          return fetchresults.json();
        })
        .then((fetchresultsJSON) => this.setMovie(fetchresultsJSON));
    },
    // Get API informations for TVShows
    getTVshow() {
      this.results = "";
      fetch(`https://api.themoviedb.org/3/search/tv?api_key=${this.api}&language=fr&query=${this.tvShowName}`)
        .then((fetchresults) => {
          return fetchresults.json();
        })
        .then((fetchresultsJSON) => this.setMovie(fetchresultsJSON));
    },
    setMovie(results) {
      this.results = results;
      this.movieName = "";
      this.tvShowName = "";
    },
  },
};
</script>

<style scoped>
.showMovie {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-content: center;
  background-color: var(--color-white-header);
  padding: 1rem;
  border-radius: var(--border-radius-xsmall);
  box-shadow: var(--box-shadow-default);
  margin: 0.5rem;
  text-align: center;
  width: 90%;
}
.imgMovie {
  margin: auto;
  width: 60%;
  border-radius: 1rem;
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
.column {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-content: center;
  width: 50%;
}
.cardMovie {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: var(--color-lightgrey);
  border-radius: var(--border-radius-small);
  box-shadow: var(--box-shadow-default);
  padding: 1rem;
}
.movieTitle {
  padding: 1rem;
  font-size: 1.5rem;
}
.movieOverview {
  width: 80%;
  font-size: 1rem;
  padding: 0;
  margin: auto;
}
</style>
