import { GlobalStyles } from "./styles/GlobalStyles";

import Header from "./components/Header";
import Oders from "./components/Orders";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Oders />
    </>
  );
};

export default App;
