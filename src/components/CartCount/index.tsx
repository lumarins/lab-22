import { FC } from "react";
import { useProducts } from "../../hooks/useProducts";
import { Cart } from "./styles";

const CartCount:FC = () => {
    const {products} = useProducts();
    const countProducts = () => {
        let counter = 0;
        products.forEach((product) => {
            counter += product.qtd;
        });
        return counter;
    }
    return (
        <>
        { !!countProducts() && 
        <Cart>
            {countProducts() }
        </Cart> }
        </>
        
    )
}
  
  export default CartCount;
  