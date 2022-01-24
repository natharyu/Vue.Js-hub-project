<template>
  <div>
    <section id="mainHome" class="mainHome">
      <h2>Bienvenue sur mon hub de projets Vue.JS</h2>
      <article>
        <h3>Choisissez parmi ces projets</h3>
        <ul class="card">
          <router-link tag="li" class="router-link" to="/todolist">TodoList</router-link>
          <router-link tag="li" class="router-link" to="/weather">Météo</router-link>
          <router-link tag="li" class="router-link" to="/movies">Films / Séries</router-link>
          <router-link tag="li" class="router-link" to="/popular">Films populaires</router-link>
        </ul>
      </article>
    </section>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped>
.router-link {
  color: var(--color-black-header);
  text-decoration: none;
  padding: 1.5rem;
  width: 85%;
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0.5rem;
}
.router-link:hover {
  padding: 1.5rem;
  color: var(--color-black-header);
  background-color: var(--color-white-header);
  border-radius: var(--border-radius-small);
  animation: scale 0.5s ease 0s 1 normal forwards;
}
@keyframes scale {
  0% {
    transform: scale(1);
  }

  100% {
    transform: scale(1.2);
  }
}
</style>
