import Navigation from "./components/Navigation";
import Products from "./components/Products";
import { ShopProvider } from "./contexts/ShopContext";

function App() {

  return (
    <>
      <ShopProvider>
        <Navigation />
        <Products />
      </ShopProvider>
    </>
  );
}

export default App;
