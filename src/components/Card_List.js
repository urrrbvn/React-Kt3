import { useEffect } from 'react';
import Card_Item from './Card_Item'

function Card_List(props) {

    const {cards , deleteCard} = props

    // useEffect(()=>{
    //   console.log(cards.products)
    // }, [cards]);

    return (
      <div className='CardContainer'>
        {Array.isArray(cards.products) ? cards.products.map(elem => <Card_Item
                            key={elem.id}
                            id={elem.id}
                            title={elem.title}
                            image = {elem.thumbnail}
                            price = {elem.price}
                            rating = {elem.rating}
                            deleteCard = {deleteCard}
        />) : null}
        {/* <button onClick={()=> console.log(cards.products)} >TEST</button> */}
        

      </div>
    );
  }
  
  export default Card_List;
  