import { ThemeProvider } from "styled-components";

import GlobalStyles from "./styles/global";
import { theme } from "./styles/theme";

import Home from "./pages/home";
import { ProductsProvider } from "./hooks/useProducts";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <ProductsProvider>
        <GlobalStyles />
        <Home />
      </ProductsProvider>
    </ThemeProvider>
  );
};

export default App;
