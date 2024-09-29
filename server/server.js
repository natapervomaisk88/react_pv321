const express = require('express');
const cors = require('cors');

const products = [
    {
      "id": 1,
      "title": "Teapot1",
      "price": 30
    },
    {
      "id": 2,
      "title": "Teapot2",
      "price": 30
    },
    {
      "id": 3,
      "title": "Teapot3",
      "price": 30
    },
    {
      "id": 4,
      "title": "Teapot4",
      "price": 30
    }
  ]

const app = express();

app.use(express.json());
app.use(cors({
    origin: '*',
}))

app.get('/', (req, res) => {
    res.status(200).json(products);
})

app.post('/', (req, res) => {
  console.log(req.body);
    const { title, price } = req.body;
    const product = { id: Date.now(), title, price }
    products.push(product);
    res.status(200).json(product);
})

app.listen(3000, () => {
    console.log('Server started at port 3000.');
})