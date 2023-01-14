
import Home from "./routes/home.component";
import { Routes, Route } from 'react-router-dom';
import Navigation from "./routes/Navigation/navigation.component";
import Authentication from "./routes/Authentication/authentication.component";
import Shop from './Components/shop-list/shop.components';
import Checkout from "./Components/checkout/checkout.components";

// const Shop = () => {
//   return <h1>THis is shop.</h1>
// }

const App = () => {
  return (
    <Routes>      
      <Route path="/" element={<Navigation />}>
        {/* outlet of navigation will display the children */}
        <Route index element={<Home />} />
        <Route path="/checkout" element={<Checkout/>}/>
        <Route path="/shop/*" element={<Shop />} />
        <Route path="/authenticate" element={<Authentication />}/>
      </Route>
    </Routes>
  );
}

export default App;
