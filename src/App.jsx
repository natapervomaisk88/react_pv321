import { ProductCardComponent } from "./components/ProductCardComponent";
import { ProductCardComponentV2 } from "./components/ProductCardComponentV2";

const products = [
  {
    id: 1,
    title: "Teapot1",
    price: 30,
    discount: 20,
    imagePath: "https://www.rayware.co.uk/media/catalog/product/0/0/0059.098_1.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=500&width=600&canvas=600:500"
  },
  {
    id: 2,
    title: "Teapot2",
    price: 30,
    discount: 20,
    imagePath: "https://www.rayware.co.uk/media/catalog/product/0/0/0059.098_1.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=500&width=600&canvas=600:500"
  },
  {
    id: 3,
    title: "Teapot3",
    price: 30,
    discount: null,
    imagePath: "https://www.rayware.co.uk/media/catalog/product/0/0/0059.098_1.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=500&width=600&canvas=600:500"
  },
  {
    id: 4,
    title: "Teapot4",
    price: 30,
    discount: 20,
    imagePath: "https://www.rayware.co.uk/media/catalog/product/0/0/0059.098_1.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=500&width=600&canvas=600:500"
  },
];

function App() {

  return (
    <div>
      <div style={{
        display: 'flex',
      }}>
        {products.map(p => <ProductCardComponent key={p.id} product={p}/>)}
      </div>
      <ProductCardComponentV2 product={products[0]}/>
    </div>
  )
}

export default App