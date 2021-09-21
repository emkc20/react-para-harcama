import Header from "./component/Header"
import Basket from "./component/Basket"
import './App.css';
import { useState, useEffect } from 'react'
import products from './products.json'
import Product from './component/Product'

function App() {

  const [money, setMoney] = useState(10000000);
  const [basket, setBasket] = useState([]);
  const [total, setTotal] = useState(0);

  //sıfırlamak için
  const resetBasket = () => {
    setBasket([])
  }

  useEffect(() => {
    setTotal(basket.reduce((acc, item) => {
      return acc + (item.amount * (products.find(product => product.id === item.id).price))
    }, 0))

    console.log(total);
  }, [basket])

  return (
    <div className="App">
      <Header total={total} para={money} />
      <div className="container products">{products.map(product => (
        <Product total={total} money={money} key={product.id} basket={basket} setBasket={setBasket} products={product} />
      ))}
      </div>
      {total > 0 && (<Basket resetBasket={resetBasket} products={products} basket={basket} total={total} />)}
    </div>
  );
}

export default App;
