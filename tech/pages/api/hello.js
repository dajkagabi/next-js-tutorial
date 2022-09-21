// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))