import React from 'react'

export default function Product({ products, basket, setBasket , total , money }) {

    const basketItem = basket.find(item => item.id === products.id)

    const addBasket = () => {
        const checkBasket = basket.find(item => item.id === products.id)

        if (checkBasket) {
            checkBasket.amount += 1
            setBasket([...basket.filter(item => item.id !== products.id), checkBasket])
        } else {
            setBasket([...basket, {
                id: products.id,
                amount: 1
            }])
        }

    }

    const removeBasket = () => {
        const currentBasket = basket.find(item => item.id === products.id)
        const basketWithoutCurrent = basket.filter(item => item.id !== products.id)
        currentBasket.amount -= 1

        if (currentBasket.amount === 0) {
            setBasket([...basketWithoutCurrent])

        } else {
            setBasket([...basketWithoutCurrent, currentBasket])

        }




    }


    return (
        <div className="pro-con" >
            <div className="product">
                
                <img src={products.image} alt=""/>

                <h6>{products.title}</h6>
                <div className="price"> $ {products.price}</div>
                <div className="actions">
                    <button className="sell-btn" disabled={!basketItem} onClick={removeBasket}>Sat</button> 
                    <span className="amount"> {basketItem && basketItem.amount || 0} </span>
                    <button className="buy-btn" onClick={addBasket}  disabled={total + products.price > money} >Satın Al</button>
                    
                </div>
                <style jsx>
                    {`
                    .product{
                        padding:10px;
                        background:#fff;
                        border: 1px solid #ddd;
                        margin-bottom:20px;
                        width: 100%;
                    }
                    .product img{
                        width:100%
                    }
                    .product h6 {
                    font-size: 20px;
                    margin-bottom: 10px;
                  }
                  .product .price {
                    font-size: 20px;
                    color: #179b17;
                  }
                  .product .actions {
                    display: flex;
                    align-items: center;
                    margin-top: 15px;
                  }
                  .actions button {
                    height: 40px;
                    padding: 0 15px;
                    flex: 1;
                    cursor: pointer;
                  }
                   .actions .amount {
                    width: 40px;
                    text-align: center;
                    border: 1px solid #ddd;
                    height: 40px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 17px;
                    font-weight: bold;
                    color: #555;
                  }
                                    .actions .buy-btn {
                    background: #61dafb;
                    font-size: 14px;
                    font-weight: 500;
                    border-radius: 0 4px 4px 0;
                  }
                  .actions .sell-btn {
                    background: #ccc;
                    font-size: 14px;
                    color: #333;
                    font-weight: 500;
                    border-radius: 4px 0 0 4px;
                  }
                    `}
                </style>
            </div>


        </div>
    )
}
