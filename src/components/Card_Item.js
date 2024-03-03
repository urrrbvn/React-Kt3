import Stars from "./stars";

function Card_Item(props) {

  const {id, title , image, price, rating, deleteCard} = props

    return (
      <div className="Card" onDoubleClick={()=>deleteCard(id)}>
        <img src={image} alt="" width="350" height="250"/>
        <p>Title: {title}</p>
        <p>Price: {price}</p>
        <p>Rating: {rating}</p>
        <Stars rating={rating} ></Stars>
      </div>
    );
  }
  
  export default Card_Item;
  