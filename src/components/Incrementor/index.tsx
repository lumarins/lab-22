import { Plus as PlusIcon } from "@styled-icons/boxicons-regular/Plus";
import { Subtract as SubtractIcon } from "@styled-icons/remix-fill/Subtract";
import { useProducts } from "../../hooks/useProducts";
import Button from "../Button";

import { Wrapper, IconWrapper, Quantity } from "./styles";

type IncrementorProps = {
  id: number;
  quantity: number;
};

const Incrementor = ({ id, quantity }: IncrementorProps) => { 
  const {products, setProducts} = useProducts();

  const subtractItem = () => {
    const product = products.find((product) => product.id === id);
    if(product && product.qtd > 0) {
      product.qtd = product.qtd - 1;
      const newProductsList = [...products];
      setProducts(newProductsList);
    }
  }

  const addItem = () => {
    const product = products.find((product) => product.id === id);
    if(product && product.qtd < product.quantity) {
      product.qtd = product.qtd + 1;
      const newProductsList = [...products];
      setProducts(newProductsList);
    }
  }

  return (
    <Wrapper>
      <IconWrapper>
        <div onClick={subtractItem}>
          <SubtractIcon aria-label="Subtract item" />
        </div>
      </IconWrapper>

      <Quantity>{quantity}</Quantity>

      <IconWrapper>
        <div onClick={addItem}>
          <PlusIcon aria-label="Add item" />
        </div>
      </IconWrapper>
    </Wrapper>
  );
}

export default Incrementor;
