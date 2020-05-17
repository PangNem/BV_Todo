<template>
  <div class="hello">
    오늘 해야 할 일
    {{ toDoItems }}
  </div>
</template>

<script>
export default {
  name: 'hello',
  data: () => {
    return {
      toDoItems: ['1. 옷 정리', '2. 모니터 포장']
    }
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
