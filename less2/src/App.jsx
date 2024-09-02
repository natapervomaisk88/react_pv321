import './App.css';
import Card from './components/Card';
import Guitar from './assets/Guitar.jpg';

const App = () => {
  const handleAddToCart = () => {
    alert('Added to cart');
  };

  return (
    <>
      <div className="app">
        <Card
          image={Guitar}
          title="Fender Stratocaster"
          price={199.99}
          oldPrice={249.99}
          description="A high-quality guitar made in USA"
          onAddToCart={handleAddToCart}
        />
      </div>
    </>
  );
};

export default App;
