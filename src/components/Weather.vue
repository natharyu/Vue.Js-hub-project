<template>
  <div>
    <section id="Weather" class="mainWeather">
      <h2>Voici le projet Météo</h2>
      <article>
        <h3>La Météo</h3>
        <div class="card">
          <div class="inputTask">
            <input
              type="text"
              name="cityName"
              id="cityName"
              placeholder="Nom de la ville..."
              v-model="city"
              v-on:keyup.enter="getWeather"
            />
            <button v-on:click="getWeather"><i class="fas fa-search fa-1x"></i></button>
          </div>

          <div class="showWeather" v-if="cityWeather.name.length > 0">
            <div v-show="showIP == true">
              <p class="ip">Votre adresse IP est : {{ localisation.ip }}</p>
              <p>Vous habitez pas loin de</p>
            </div>
            <p class="name">{{ cityWeather.name }}, {{ cityWeather.country }}</p>
            <p>
              Température actuelle :
              <span class="cold" v-if="cityWeather.temp < 15"> {{ Math.round(cityWeather.temp) }}°c</span
              ><span class="hot" v-if="cityWeather.temp > 15"> {{ Math.round(cityWeather.temp) }}°c</span>
            </p>
            <p>Ciel : {{ cityWeather.desc }}</p>
            <img
              class="icon"
              v-bind:src="'https://openweathermap.org/img/wn/' + cityWeather.icon + '@2x.png'"
              alt="Icone"
            />
          </div>
        </div>
      </article>
    </section>
    <div class="backgroundModal" v-show="modal == true">
      <div class="modalWindow">
        <p>La ville indiquée est introuvable !</p>
        <p>Veuillez saisir un nom de ville ou de région valide.</p>
        <button class="delete" v-on:click="closeModal"><i class="fas fa-times"></i> Fermer</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Weather",
  el: "#Weather",
  data() {
    return {
      city: "",
      api: "c4c0e10a4e62f92941dcc501772432bb",
      apiKeyIP: "at_zmi88rl1dLffQOZjUFcNG0djAgKhq",
      cityWeather: {
        name: "",
        country: "",
        temp: "",
        desc: "",
        icon: "",
      },
      iconUrl: "",
      localisation: {},
      showIP: true,
      modal: false,
    };
  },
  mounted() {
    this.localisation = "";
    fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${this.apiKeyIP}`)
      .then((fetchResult) => {
        return fetchResult.json();
      })
      .then((fetchResultJSON) => {
        this.setLocalisation(fetchResultJSON);
        this.getWeatherWithIP();
      });
  },
  methods: {
    getWeatherWithIP() {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${this.localisation.location.city}&units=metric&appid=${this.api}&lang=fr`
      )
        .then((fetchResult) => {
          return fetchResult.json();
        })
        .then((fetchResultJSON) => {
          if (fetchResultJSON.cod !== 200) {
            alert(fetchResultJSON.message);
            this.setWeather("", "", "", "", "");
          } else {
            this.setWeather(
              fetchResultJSON.name,
              fetchResultJSON.sys.country,
              fetchResultJSON.main.temp,
              fetchResultJSON.weather[0].description,
              fetchResultJSON.weather[0].icon
            );
          }
        })
        .catch((error) => {
          this.setWeather("", "", "", "", "");

          alert("Une erreur est survenue. Veuillez reessayer plus tard." + error);
        });
      this.city = "";
    },
    getWeather() {
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=metric&appid=${this.api}&lang=fr`)
        .then((fetchResult) => {
          return fetchResult.json();
        })
        .then((fetchResultJSON) => {
          if (fetchResultJSON.cod !== 200) {
            this.modal = true;
            this.setWeather("", "", "", "", "");
          } else {
            this.setWeather(
              fetchResultJSON.name,
              fetchResultJSON.sys.country,
              fetchResultJSON.main.temp,
              fetchResultJSON.weather[0].description,
              fetchResultJSON.weather[0].icon
            );
            this.showIP = false;
          }
        })
        .catch((error) => {
          this.setWeather("", "", "", "", "");
          alert("Une erreur est survenue. Veuillez reessayer plus tard." + error);
        });
      this.city = "";
    },

    setWeather(name, country, temp, desc, icon) {
      this.cityWeather = {
        name: name,
        country: country,
        temp: temp,
        desc: desc,
        icon: icon,
      };
    },
    setLocalisation(results) {
      this.localisation = results;
    },
    closeModal() {
      this.modal = false;
    },
  },
};
</script>

<style scoped>
.backgroundModal {
  background-color: var(--color-grey-header);
  width: 100vw;
  height: 100vw;
  position: fixed;
  top: 0px;
  left: 0px;
}
.modalWindow {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-content: center;
  margin: auto;
  background-color: var(--color-white-header);
  padding: 1rem;
  border-radius: var(--border-radius-xsmall);
  box-shadow: var(--box-shadow-default);
  width: 50%;
  margin-top: 10%;
}
.modalWindow p {
  margin: auto;
}
.modalWindow button {
  margin: auto;
  margin-top: 1rem;
  width: 50%;
}
.delete {
  background-color: red;
  border: none;
  color: var(--color-white-header);
  padding: 0.5rem;
  border-radius: var(--border-radius-xsmall);
  cursor: pointer;
}
.delete:hover {
  background-color: rgba(255, 0, 0, 0.4);
}
.ip {
  font-size: 1.2rem;
  padding: 0.5rem;
}
.showWeather {
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: space-around;
  text-align: center;
  background-color: var(--color-white-header);
  padding: 1rem;
  border-radius: var(--border-radius-xsmall);
  box-shadow: var(--box-shadow-default);
}
.showWeather img {
  border: 2px solid var(--color-lightgrey);
  border-radius: var(--border-radius-small);
  background-color: var(--color-lightgrey);
  margin: auto;
  margin-top: 1rem;
}
.name {
  font-size: 1.5rem;
  font-weight: bold;
  padding: 0.5rem;
}
.cold {
  color: rgb(107, 176, 204);
  font-size: 1.5rem;
}
.hot {
  color: red;
  font-size: 1.5rem;
}
.icon {
  width: 50%;
  height: auto;
  margin: auto;
  margin-top: 1rem;
}
</style>
