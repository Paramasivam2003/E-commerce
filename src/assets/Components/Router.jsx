import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import Product from "./product";
import Products from "./Products";

function Routers(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path="/product" element={<Product />}/>
          <Route path="/products/:id" element={<Products />}/>

        </Route>
      </Routes>
    </BrowserRouter>
  )
}
export default Routers;