import axios from "axios";
import { useContext, createContext, useState, SetStateAction, Dispatch, useEffect } from "react";

type ChildrenType<T = {}> = T & { children?: React.ReactNode };

type ProductsContextType = {
    //  TODO: criar type do produto
  products: object[];
  setProducts: Dispatch<SetStateAction<object[]>>;
};

const ProductsContext = createContext<ProductsContextType>({
  products: [],
  setProducts: () => {},
});

export const ProductsProvider = ({ children }: ChildrenType) => {
  const [productsList, setProductsList] = useState<object[]>([]);

  async function getProductsList() {
    const response = await axios.get<object[]>(
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
