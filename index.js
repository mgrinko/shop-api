const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;

let goods = [
  { id: 1, title: 'apple', categoryId: 1 },
];

let categories = [
  { id: 1, title: 'Fruits' },
];

app.get('/goods', (req, res) => {
  res.json(goods)
})

app.get('/categories', (req, res) => {
  res.json(categories);
})

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
});
