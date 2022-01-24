import Home from "./components/Home.vue";
import ToDoList from "./components/ToDoList.vue";
import Weather from "./components/Weather.vue";
import MovieDatabase from "./components/MovieDatabase.vue";
import PopularMovies from "./components/PopularMovies.vue";

export default [
  { path: "/", component: Home },
  { path: "/todolist", component: ToDoList },
  { path: "/weather", component: Weather },
  { path: "/movies", component: MovieDatabase },
  { path: "/popular", component: PopularMovies },
];
