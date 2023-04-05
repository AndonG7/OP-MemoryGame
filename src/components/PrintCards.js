import grujo from "../images/grujo.jpg";
import zaev from "../images/zajko.jpg";
import obidzuko from "../images/obidzuko.jpg";
import vasko from "../images/vasko.jpg";
import caci from "../images/caci.jpg";
import apasiev from "../images/apasiev.jpg";
import shuffleArray from "../shuffleArray.js";

function PrintCards() {
    const cards = [
        {title: "Грујо", src:grujo, alt:"Nikola Gruevski", key:0},
        {title: "Заев", src:zaev, alt:"Zoran Zaev", key:1},
        {title: "Обиџуко", src:obidzuko, alt:"Nikola Gruevski", key:2},
        {title: "Васко", src:vasko, alt:"Nikola Gruevski", key:3},
        {title: "Цаци", src:caci, alt:"Nikola Gruevski", key:4},
        {title: "Апасиев", src:apasiev, alt:"Nikola Gruevski", key:5},
    ];

    const shuffledCards = shuffleArray(cards);

    return (
      <div className="PrintCards">
        {shuffledCards.map((card, index) => {
                    return (
                        <div class="card" key={index}>
                            <img class="card-image" src={card.src} alt={card.alt}></img>
                            <h2 class="card-title">{card.title}</h2>
                        </div>
                    );
                })}
      </div>
    );
  }
  
  export default PrintCards;
  