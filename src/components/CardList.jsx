import Card from "./Card";
import data from "../data/data.json";

function CardList(){
    return(
        <div>
             {data.map((materiel) =>(<Card materiel={materiel}/>))}
             
        </div>
    )
}



export default CardList;