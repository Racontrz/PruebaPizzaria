

import home from '../assets/2.png'

const Home = () => {
  

  return (
   <div className="container">
     <div className="container text-center m-5">
      <div>
      <h1>Las Mejores Pizzas que Podrás Encontrar</h1>
      </div>
      <div>
        <img src={home} alt="home"  className="mt-5"/>
      </div>
    </div>
   </div>
    
  )

};

export default Home;
