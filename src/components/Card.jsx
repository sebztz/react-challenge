

function Card({materiel}){


    return(
            <div>
                 <p>{materiel.title}</p>
                 <p>{materiel.description} </p>
                 <img src={materiel.img}/>
                 <p>{materiel.price}</p>
                 <p>{materiel.category}</p>
                 <button>ajouter au panier</button>
            </div> 
                
                
    
    );
}

export default Card;