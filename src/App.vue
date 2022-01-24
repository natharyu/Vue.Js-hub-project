<template>
  <div class="container">
    <Header></Header>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "./components/Header.vue";

export default {
  name: "App",
  components: {
    Header,
  },
};
</script>

<style>
:root {
  --color-white-header: white;
  --color-black-header: black;
  --color-grey-header: rgba(0, 0, 0, 0.7);
  --color-lightgrey: rgba(0, 0, 0, 0.3);
  --border-radius-big: 3rem;
  --border-radius-medium: 2rem;
  --border-radius-small: 1rem;
  --border-radius-xsmall: 0.5rem;
  --box-shadow-default: 0px 0px 10px 0px #000000;
}
* {
  margin: 0;
  box-sizing: border-box;
}
html {
  background-color: lightgrey;
}

body {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  font-family: "Lato", sans-serif;
  width: 100%;
}
.container {
  max-width: 1100px;
  margin: auto;
  font-size: 20px;
  display: flex;
  flex-direction: column;
  align-content: center;
}
.mainHome,
.mainToDoList,
.mainWeather,
.mainMovie {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--color-lightgrey);
  padding: 1rem;
  margin-top: 1rem;
  width: 100%;
  border-radius: var(--border-radius-big);
}
.mainHome h2,
.mainToDoList h2,
.mainWeather h2,
.mainMovie h2 {
  text-align: center;
  color: var(--color-white-header);
  background-color: var(--color-grey-header);
  border-radius: var(--border-radius-medium);
  padding: 2rem;
  width: 75%;
  box-shadow: var(--box-shadow-default);
}
.mainHome article,
.mainToDoList article,
.mainWeather article,
.mainMovie article {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  margin: 1rem;
  width: 90%;
  background-color: var(--color-white-header);
  border-radius: var(--border-radius-small);
  box-shadow: var(--box-shadow-default);
}
.mainHome article h3,
.mainToDoList article h3,
.mainWeather article h3,
.mainMovie article h3 {
  color: var(--color-black-header);
  padding: 1rem;
}
.mainHome .card,
.mainToDoList .card,
.mainWeather .card,
.mainMovie .card {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: var(--color-lightgrey);
  border-radius: var(--border-radius-small);
  box-shadow: var(--box-shadow-default);
  width: 85%;
  padding: 1rem;
}
.mainToDoList .card .inputTask,
.mainWeather .card .inputTask,
.mainMovie .card .inputMovie {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 1rem;
}
.mainToDoList .card .inputTask input,
.mainWeather .card .inputTask input,
.mainMovie .card .inputMovie input {
  font-family: "Lobster", cursive;
  border: 2px solid black;
  border-right: 0;
  border-radius: var(--border-radius-xsmall);
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  padding-left: 1rem;
  font-size: 1.5rem;
  width: 70%;
  height: 2.5rem;
}
.mainToDoList .card .inputTask button,
.mainWeather .card .inputTask button,
.mainMovie .card .inputMovie button {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  font-size: 1.2rem;
  text-shadow: #4c974c 2px 0 0;
  color: var(--color-white-header);
  background-color: #5cb85c;
  border: 3px solid #4c974c;
  border-left: 3px solid #4c974c;
  border-radius: var(--border-radius-xsmall);
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  width: 15%;
  height: 2.5rem;
}
.mainToDoList .card .inputTask button:hover,
.mainWeather .card .inputTask button:hover,
.mainMovie .card .inputMovie button:hover {
  color: #306430;
  text-shadow: none;
  animation: animationAddButton 2s ease 0s 1 normal forwards;
}
@keyframes animationAddButton {
  0%,
  100% {
    transform: rotate(0deg);
    transform-origin: 0 50%;
  }

  10% {
    transform: rotate(2deg);
  }

  20%,
  40%,
  60% {
    transform: rotate(-3deg);
  }

  30%,
  50%,
  70% {
    transform: rotate(3deg);
  }

  80% {
    transform: rotate(-2deg);
  }

  90% {
    transform: rotate(2deg);
  }
}
.mainToDoList .listTasks {
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
  width: 100%;
}
.mainToDoList .listTasks .task {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 75%;
  margin: 0.5rem;
}
.mainToDoList .delete {
  background-color: red;
  border: none;
  color: var(--color-white-header);
  padding: 0.5rem;
  border-radius: var(--border-radius-xsmall);
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  cursor: pointer;
}
.mainToDoList .delete:hover {
  background-color: rgba(255, 0, 0, 0.4);
}
.mainToDoList .deleteAll {
  background-color: red;
  border: none;
  color: var(--color-white-header);
  padding: 0.5rem;
  border-radius: var(--border-radius-xsmall);
  cursor: pointer;
}
.mainToDoList .deleteAll:hover {
  background-color: rgba(255, 0, 0, 0.4);
}
.mainToDoList .check {
  background-color: orange;
  color: var(--color-white-header);
  padding: 0.5rem;
  border-radius: var(--border-radius-xsmall);
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  cursor: pointer;
  border: 0px;
}
.mainToDoList .check:hover {
  background-color: rgb(255, 130, 0, 0.4);
}
.mainToDoList .done {
  background-color: #5cb85c;
  color: var(--color-white-header);
  padding: 0.5rem;
  border-radius: var(--border-radius-xsmall);
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  cursor: pointer;
  border: 0px;
}
.mainToDoList .done:hover {
  background-color: rgba(92, 184, 92, 0.4);
}
</style>
