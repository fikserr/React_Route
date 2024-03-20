import { BrowserRouter, Route, Routes  } from "react-router-dom";
import HomeLayout from "./layout/HomeLayout";
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Laptop from "./components/Laptop";
import Smartphone from "./components/Smartphone";
import Television from "./components/Television";
import Acer from "./components/Acer";
import Hp from "./components/Hp";
import Lenavo from "./components/Lenavo";
import Apple from "./components/Apple";
import Samsung from "./components/Samsung";
import Redmi from "./components/Redmi";
import Artel from "./components/Artel";
import Lg from "./components/Lg";
import Hofman from "./components/Hofman";


function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeLayout/>}>
          <Route index element={<Home/>}/>
          <Route path="products" element={<Products/>}>
          <Route path='laptop' element={<Laptop/>}>
              <Route path='acer' element={<Acer/>}/>
              <Route path='hp' element={<Hp/>}/>
              <Route path='lenavo' element={<Lenavo/>}/>
          </Route>
            <Route path='smartphone' element={<Smartphone/>}>
            <Route path='apple' element={<Apple/>}/>
            <Route path='samsung' element={<Samsung/>}/>
            <Route path='redmi' element={<Redmi/>}/>
            </Route>
            <Route path='television' element={<Television/>}>
              <Route path='artel' element={<Artel/>}/>
              <Route path='lg' element={<Lg/>}/>
              <Route path='hofman' element={<Hofman/>}/>
            </Route>
          </Route>
          <Route path="about" element={<About/>}/>
          <Route path="contact" element={<Contact/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
