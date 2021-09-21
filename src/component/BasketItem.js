import React from 'react'

export default function BasketItem( {item , product}) {
    return (

        <>

        <li className="basket-item">
            {product.title} x {item.amount}
        </li>

            <style jsx>{`
              .basket-item {
                padding-bottom: 10px;
                font-size: 17px;
              }
             
			`}</style>

        </>
    )
}
