import { useState } from 'react';
import { BrowserRouter } from 'react-router';
import { ChakraProvider, createSystem, defaultConfig, defineConfig } from "@chakra-ui/react"
import Nav from './components/nav';
import Header from './components/header';
import Main from './components/main';

const config = defineConfig({
  theme: {
    tokens: {
      colors: {},
    },
  },
})

const system = createSystem(defaultConfig, config)

const App = () => {

  const [toggleNav, setToggleNav] = useState(false);

  return (
    <ChakraProvider value={system}>
      <BrowserRouter>
        <Header setToggleNav={setToggleNav} />
        <Nav displayed={toggleNav} />
        <Main />
      </BrowserRouter >
    </ChakraProvider>
  );
}

export default App;
