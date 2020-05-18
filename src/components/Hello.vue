<template>
  <div class="hello">
    <b-card
    header="오늘 할 일"
    style="max-width: 40rem;
    margin: auto;
    margin-top: 10vh;"
    class="mb-2"
    border-variant="info"
    align="left">

      <b-form-group id="to-do-input">
        <b-container fluid>
          <b-row class="my-1">
            <b-col sm="10">
              <b-form-input v-model="newToDoItem.title" type="text" placeholder="새 할 일을 적으세요." v-on:keyup.enter="createToDo" />
            </b-col>
            <b-col sm="2">
              <b-button variant="outline-primary" v-on:click="createToDo">추가</b-button>
            </b-col>
          </b-row>
        </b-container>
      </b-form-group>

      <b-list-group v-if="toDoItems && toDoItems.length">
        <b-list-group-item
          v-for="toDoItem of toDoItems"
          v-bind:data="toDoItem.title"
          v-bind:key="toDoItem.id">
          <b-form-checkbox
            v-model="toDoItem.done">
              {{toDoItem.title}}
          </b-form-checkbox>
        </b-list-group-item>
      </b-list-group>
    </b-card>
  </div>
</template>

<script>
const axios = require('axios')
const BASE_URL = 'http://localhost:3000/todo/'

export default {
  name: 'hello',
  data: () => {
    return {
      toDoItems: [],
      newToDoItem: {}
    }
  },
  methods: {
    initToDo: function () {
      axios.get(BASE_URL)
        .then(response => {
          this.toDoItems = response.data.data
        })
        .catch(error => {
          console.error(error)
        })
    },
    createToDo: function (event) {
      event.preventDefault()
      if (!this.newToDoItem.title) return
      axios.post(BASE_URL, this.newToDoItem)
        .then(response => {
          console.log(response)
          this.initToDo()
          this.newToDoItem = {}
        })
        .catch(error => {
          console.error(error)
        })
    }
  },
  created () {
    this.initToDo()
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #35495e;
}
</style>
