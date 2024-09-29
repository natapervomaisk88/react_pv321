import { useEffect, useState } from "react"
import { FormComponent } from "./components/Form";
import { CardComponent } from "./components/Card";

const baseUrl = 'http://localhost:3000';

async function fetchProducts() {
  const response = await fetch(baseUrl, { method: 'GET' });
  const data = response.json();
  return data;
}

async function postProduct(title, price) {
  const response = await fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',  
    },
    body: JSON.stringify({ title, price }),  
  });
  const data = await response.json();
  return data;
}

function App() {
  const [products, setProducts] = useState();

  useEffect(() => {
    (async () => {
      setProducts(await fetchProducts());
    })()
  }, []);

  const onSubmit = (title, price) => {
    (async () => {
      const insertedProduct = await postProduct(title, price)
      setProducts(prev => [ ...prev, insertedProduct ]);
    })()
  }

  return (
    <div className="">
      <FormComponent onSubmit={onSubmit}/>
      <div className="">
        {products && products?.map(product => <CardComponent title={product.title} price={product.price} key={product.id}/>)}
      </div>
    </div>
  )
}

export default App
