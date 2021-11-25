const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;

const goodsService = require('./goods');


let categories = [
  { id: 1, title: 'Fruits' },
];

app.use((req, res, next) => {
  res.set('Access-Control-Allow-Origin', 'http://localhost:3000')
  res.set('Access-Control-Allow-Headers', 'Content-Type')
  next();
})

app.get('/goods', (req, res) => {
  res.json(goodsService.getAll());
})

app.get('/goods/:id', (req, res) => {
  const good = goodsService.getOne(req.params.id)

  if (!good) {
    res.send(404);
  } else {
    res.json(good);
  }
})

app.post('/goods', express.json(), (req, res) => {
  const { title, categoryId } = req.body;

  if (!title || !categoryId) {
    res.send(400);
    return;
  }

  const good = goodsService.add({ title, categoryId });

  res.json(good);
})

app.get('/categories', (req, res) => {
  res.json(categories);
})

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
});
