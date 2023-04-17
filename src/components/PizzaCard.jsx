import { useContext } from "react";
import { MyContext } from "./context/MyContext";
import { useNavigate } from "react-router-dom";
import Ingredients from "./Ingredients";


function PizzaCard({}) {
  const { pizza, setPizza } = useContext(MyContext);

  const navigate = useNavigate()

  const more = () => {
    navigate(`details/${pizza.id}`)
   console.log(pizza.id);
  }

  return (
    <div >
      <div className="container d-flex flex-wrap">
        {pizza.map((item) => (
          <div key={item.id} >
            <div className="text-center m-3 card " style={{ width: '18rem' }} >
              <img
                src={item.img}
                alt={item.name}
              />
              <div className="m-3">
                <h4 className="card-title">{item.name}</h4>
                <hr />
                <h6>Ingredientes:</h6>
                  <div>
                    <Ingredients/>
                  </div>
                  <hr />
                  <h3>Precio: ${item.price}</h3>
                <div>
                <button onClick={more} className="btn btn-dark m-3">Ver Más</button>
                <button onClick={more} className="btn btn-dark m-3">Añadir</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PizzaCard;
