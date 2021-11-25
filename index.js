const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/test', (req, res) => {
  res.send('test 789')
})

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
});
