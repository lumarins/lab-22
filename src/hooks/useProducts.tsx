import axios from "axios";
import { useContext, createContext, useState, SetStateAction, Dispatch, useEffect } from "react";

type ChildrenType<T = {}> = T & { children?: React.ReactNode };

type ProductType = {
    id: number;
    name: string;
    picture: string;
    price: number;
    qtd?: number;
}

type ProductsContextType = {
  products: ProductType[];
  setProducts: Dispatch<SetStateAction<ProductType[]>>;
};

const ProductsContext = createContext<ProductsContextType>({
  products: [],
  setProducts: () => {},
});

export const ProductsProvider = ({ children }: ChildrenType) => {
  const [productsList, setProductsList] = useState<ProductType[]>([]);

  async function getProductsList() {
    const response = await axios.get<ProductType[]>(
      'http://localhost:3001/products',
    );
    setProductsList(response.data);
  } 

  useEffect(() => {
    getProductsList();
  }, []);



  return (
    <ProductsContext.Provider value={{ products: productsList, setProducts: setProductsList }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = () => {
  const ctx = useContext(ProductsContext);

  if (ctx === undefined) {
    throw new Error("useProducts must be used within a ProductsProvider");
  }

  return ctx;
};
