import { useState } from "react";
import Cart from "../components/Cart";
import { Container } from "../components/Container";
import Header from "../components/Header";
import Product from "../components/Product";
import { useProducts } from "../hooks/useProducts";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {products} = useProducts();

  return (
    <>
      <Header setIsOpen={setIsOpen} />
      <Container>
        {
          products.map((product) => (
            <Product
              {...product}
            />
          ))
        }
        <Cart isOpen={isOpen} setIsOpen={setIsOpen} />
      </Container>
    </>
  );
};

export default Home;
