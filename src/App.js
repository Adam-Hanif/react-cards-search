import { useState } from "react";
import "./App.css";
import imgEcco from "./images/ECCO.jpg";
import imgAsics from "./images/Asics.jpg";
import imgAddidas from "./images/addidas.jpg";
import imgConverse from "./images/converse.jpg";
import imgPuma from "./images/puma.jpg";
import imgNike from "./images/nike.jpg";

function App() {
  const [cards, setCards] = useState([
    {
      id: 1,
      img: imgNike,
      name: "Nike",
      price: "9000 ₽ ",
    },
    {
      id: 2,
      img: imgConverse,
      name: "Converse",
      price: "3999 ₽ ",
    },
    {
      id: 3,
      img: imgAddidas,
      name: "Addidas",
      price: "5950 ₽ ",
    },
    {
      id: 4,
      img: imgPuma,
      name: "Puma",
      price: "4000 ₽ ",
    },
    {
      id: 5,
      img: imgEcco,
      name: "ECCO",
      price: "5500 ₽ ",
    },
    {
      id: 6,
      img: imgAsics,
      name: "Asics",
      price: "7000 ₽ ",
    },
  ]);
  const [search, setSearch] = useState("");
  return (
    <div className="App">
      <input value={search} onChange={(e) => setSearch(e.target.value)} className="search" type="text" placeholder="Подборка товаров" />

      <div className="cards">
        {cards
          .filter((card) =>
            card.name.toLowerCase().includes(search.toLowerCase())
          )
          .map((card) => {
            return (
              <div className="card">
                <img src={card.img} alt="" />
                <div className="card_item">
                  <div className="title">
                    <h2 >{card.name}</h2>
                    <b>{card.price}</b>
                  </div>
                  <button  className="details_btn">Детали</button>
                </div>
                <p style = {{opacity:'0.8',fontStyle:'italic'}}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Rerum, cumque labore.
                </p>
                <button className="add_btn">Добавить в корзину</button>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default App;
