
function PrintCards(props) {

    return (
      <div className="PrintCards">
        {props.cards.map((card) => {
                    return (
                        <div class="card" key={card.id} onClick={(e) => props.handleClick(card.id)} >
                            <img class="card-image" src={card.src} alt={card.alt}></img>
                            <h2 class="card-title">{card.title}</h2>
                        </div>
                    );
                })}
      </div>
    );
  }
  
  export default PrintCards;
  