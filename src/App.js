import { BrowserRouter } from 'react-router';
import { ChakraProvider, createSystem, defineConfig } from "@chakra-ui/react"
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

const system = createSystem(config)

const App = () => {
  return (
    <ChakraProvider value={system}>
      <BrowserRouter>
        <Header />
        <Nav />
        <Main />
      </BrowserRouter >
    </ChakraProvider>
  );
}

export default App;
