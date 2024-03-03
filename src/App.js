import Header from "./components/Header";
import Card_List from "./components/Card_List"
import Footer from "./components/Footer";
import {useEffect, useRef, useState} from 'react'
import './App.css';

function App() {

  const [cards, setCards] = useState([1,2])

  useEffect(()=>{
    async function getCards(){
      try{
        const res = await fetch('https://dummyjson.com/products');
        
        const data = await res.json()
        setCards(data)

      }catch(error){
        console.log('Запрос неудался', error)
      }
    }
    getCards()
  },[])

  function deleteCard(id){
    const newObj = {...cards}
    newObj.products = newObj.products.filter(elem => elem.id !== id)

    setCards(newObj)
    // console.log(cards.products)
  }

  const footerRef = useRef()

  function scrollHandler(){
    footerRef.current.scrollIntoView({behavior: 'smooth'})
  }


  return (
    <div>
      <Header scrollHandler = {scrollHandler} ></Header>
      <div className="wrapper">
        <Card_List cards={cards}
                  deleteCard = {deleteCard} 
        />
      </div>
      <Footer ref={footerRef} ></Footer>
    </div>
  );
}

export default App;
