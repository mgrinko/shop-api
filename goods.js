const { v4: uuidv4 } = require('uuid');
const faker = require('faker');

let goods = [];

for (let i = 0; i < 20; i++) {
  goods.push({
    id: uuidv4(),
    title: faker.vehicle.model(),
    categoryId: (i % 3) + 1,
  })
}

const getAll = () => {
  return goods;
}

const getOne = (id) => {
  return goods.find(good => good.id === id)
      || null;
}

const add = ({ title, categoryId }) => {
  const newGood = {
    id: uuidv4(),
    title,
    categoryId,
  };

  goods.push(newGood);

  return newGood;
};

const remove = (id) => {
  goods = goods.filter(good => good.id === id)
};

const update = (id, goodData) => {
  const good = getById(id);

  Object.assign(good, goodData);
}

module.exports = { getAll, getOne, add, remove, update }
