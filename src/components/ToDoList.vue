<template>
  <div>
    <section id="toDoList" class="mainToDoList">
      <h2>Voici le projet TodoList</h2>
      <article>
        <h3>La ToDoList</h3>
        <div class="card">
          <h4>Taches</h4>
          <div class="buttons">
            <button id="checkButton" class="checkActive" v-on:click="showTodo">A faire</button>
            <button id="doneButton" class="done" v-on:click="showDone">Déjà fait</button>
          </div>
          <div class="inputTask">
            <input type="text" name="task" id="inputTask" placeholder="Nouvelle tache" v-model="inputTask" />
            <button v-on:click="addTask"><i class="fas fa-plus fa-1x"></i></button>
          </div>
          <button class="deleteAll" v-on:click="clearAll">
            <i class="fas fa-trash-alt"></i> Supprimer toutes les taches
          </button>
          <ul class="listTasks">
            <li class="task" v-show="mode === 'todo'" v-for="task in notDoneOnly" :key="task.name">
              <p>{{ task.name }}</p>
              <div class="buttons">
                <button class="check" v-on:click="modifyTask(task)"><i class="fas fa-check"></i> Fait</button>
                <button class="delete" v-on:click="removeTask(task)"><i class="fas fa-times"></i> Supprimer</button>
              </div>
            </li>
            <li class="task" v-show="mode === 'done'" v-for="task in doneOnly" :key="task.name">
              <p>{{ task.name }}</p>
              <div class="buttons">
                <button class="check" v-on:click="modifyTask(task)"><i class="fas fa-list-ul"></i> Pas fait</button>
                <button class="delete" v-on:click="removeTask(task)"><i class="fas fa-times"></i> Supprimer</button>
              </div>
            </li>
          </ul>
        </div>
      </article>
    </section>
  </div>
</template>

<script>
export default {
  name: "TodoList",
  el: "#toDoList",
  data() {
    return {
      mode: "todo", // could be: todo or done
      inputTask: "",
      tasks: [],
    };
  },
  mounted() {
    if (localStorage.getItem("tasks")) {
      this.tasks = JSON.parse(localStorage.getItem("tasks"));
    }
  },

  computed: {
    notDoneOnly() {
      return this.tasks.filter((task) => !task.done);
    },
    doneOnly() {
      return this.tasks.filter((task) => task.done);
    },
  },
  methods: {
    showTodo() {
      this.mode = "todo";
      document.getElementById("checkButton").classList.add("checkActive");
      document.getElementById("checkButton").classList.remove("check");
      document.getElementById("doneButton").classList.remove("doneActive");
      document.getElementById("doneButton").classList.add("done");
    },
    showDone() {
      this.mode = "done";
      document.getElementById("checkButton").classList.remove("checkActive");
      document.getElementById("checkButton").classList.add("check");
      document.getElementById("doneButton").classList.add("doneActive");
      document.getElementById("doneButton").classList.remove("done");
    },
    clearAll() {
      this.tasks = [];
      localStorage.setItem("tasks", JSON.stringify(this.tasks));
    },
    addTask() {
      if (this.inputTask.length > 0) {
        this.tasks.push({
          name: this.inputTask,
          done: false,
        });
      }
      localStorage.setItem("tasks", JSON.stringify(this.tasks));
      this.inputTask = "";
    },
    modifyTask(task) {
      this.tasks.map((t) => {
        if (t.name === task.name) {
          task.done = !task.done;
        }
      });
      localStorage.setItem("tasks", JSON.stringify(this.tasks));
    },
    removeTask(task) {
      this.tasks.splice(this.tasks.indexOf(task), 1);
      localStorage.setItem("tasks", JSON.stringify(this.tasks));
    },
  },
};
</script>

<style scoped>
.checkActive {
  background-color: orange;
  color: var(--color-white-header);
  padding: 0.5rem;
  border-radius: var(--border-radius-xsmall);
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  cursor: pointer;
  border: 2px solid var(--color-lightgrey);
}
.checkActive:hover {
  background-color: rgb(255, 130, 0, 0.4);
}
.doneActive {
  background-color: #5cb85c;
  color: var(--color-white-header);
  padding: 0.5rem;
  border-radius: var(--border-radius-xsmall);
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  cursor: pointer;
  border: 2px solid var(--color-lightgrey);
}
.doneActive:hover {
  background-color: rgba(92, 184, 92, 0.4);
}
</style>
