<template>
  <header class="container">
    <div class="logo">
      <img src="../assets/logo.png" alt="Logo Vue.JS" />
      <router-link tag="li" class="router-link big" exact to="/">Projets Vue.JS</router-link>
    </div>
    <nav>
      <ul>
        <router-link tag="li" class="router-link" to="/todolist">TodoList</router-link>
        <router-link tag="li" class="router-link" to="/weather">Météo</router-link>
        <router-link tag="li" class="router-link" to="/movies">Films / Séries</router-link
        ><router-link tag="li" class="router-link" to="/popular">Films populaires</router-link>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
header {
  font-family: "Lato", sans-serif;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  color: var(--color-white-header);
  background-color: var(--color-grey-header);
  padding: 1rem;
  border-radius: var(--border-radius-big);
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
header .logo {
  width: 45%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
header .logo img {
  width: 25%;
  height: auto;
}
header .logo h1 a {
  color: var(--color-white-header);
  text-decoration: none;
  padding: 1.5rem;
}
header .logo h1 a:hover {
  padding: 2rem;
  color: var(--color-black-header);
  background-color: var(--color-white-header);
  border-radius: var(--border-radius-medium);
  animation: fade 1.5s ease 0s 1 normal forwards;
}
header nav {
  width: 70%;
}
header nav ul {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-content: center;
  width: 100%;
  list-style: none;
}
.big {
  font-size: 1.8rem;
}
.router-link {
  color: var(--color-white-header);
  text-decoration: none;
  padding: 1.5rem;
  margin: auto;
}
.router-link:hover {
  padding: 1.5rem;
  color: var(--color-black-header);
  background-color: var(--color-white-header);
  border-radius: var(--border-radius-small);
  animation: fade 1.5s ease 0s 1 normal forwards;
}
@keyframes fade {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}
</style>
