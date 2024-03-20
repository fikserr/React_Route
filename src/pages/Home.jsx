import { Link } from "react-router-dom"
import { SlBasket } from "react-icons/sl";


function Home() {
  return (
    <div className="home">
      <div className="container">
        <div className="content">
            <h1 className="title">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem, provident.</h1>
            <p className="text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum nihil deserunt dolorem unde, ullam aperiam molestias, magni reiciendis adipisci iusto praesentium culpa! Ullam, optio magnam.</p>
            <Link to="/products" className="home__buy">< SlBasket/></Link>


        </div>


      </div>

    </div>
  )
}

export default Home