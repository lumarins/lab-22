import Incrementor from "../Incrementor";
import { Wrapper, Info, Column, Text, WrapperIncrementor } from "./styles";

export type ProductProps = {
  id: number;
  name: string;
  price: number;
  picture: string;
  qtd?: number;
};

const Product = ({ id, name, price, picture, qtd = 0 }: ProductProps) => (
  <Wrapper>
    <img src={picture} alt={`Imagem de referência ${name}`} />

    <Info>
      <Column>
        <Text>{name}</Text>
        <Text>{price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</Text>
      </Column>

      <WrapperIncrementor>
        <Incrementor id={id} quantity={qtd} />
      </WrapperIncrementor>
    </Info>
  </Wrapper>
);

export default Product;
