const axios = require('axios')

axios.get('http://localhost:3000/todo')
  .then(response => {
    console.log(response.data)
    // response.data.map(r => console.log(r))
  })
