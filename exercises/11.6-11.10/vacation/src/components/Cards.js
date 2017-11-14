import React, {Component} from 'react';
import Card from "./Card"

class Cards extends Component{
    Constructor(){
        Super();
        const cards = [
      {
        place: "Meridian, Idaho",
        price: "$40",
        timeToGo: "Spring"
      },{
        place: "Cancun",
        price: "$900",
        timeToGo: "Winter"
      },{
        place: "China",
        price: "$1200",
        timeToGo: "Fall"
      },{
        place: "Russia",
        price: "$1100",
        timeToGo: "Summer"
      },{
        place: "Lebanon",
        price: "$400",
        timeToGo: "Spring"
      }
    ]
}

render() {
const bgColor =
{Switch() {
    case "Spring"
    bcColor = "pink"
}}
    return cards.map(card => {
        return ( <Card
                    place={card.place}
                    price={card.price}
                    timeToGo={card.timeToGo}
                />
            )
        })
    }
}

export default Cards;
