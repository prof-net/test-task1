import React from 'react'
import './Card.css'

const Card = ({info, delCard}) => {

    const {title, image, quantity, price, category, id} = info

    return (
        <div className="Card">
            <h2>{title} ({category.title})</h2>

            <div className="CardContent" onClick={()=>delCard(id)}>
                <img src={image} width="50" height="50" alt="img item1" />
                <ul>
                    <li>Количество: {quantity}</li>
                    <li>Цена: {price}</li>
                </ul>
            </div>

        </div>
    )
}

export default Card