import { useState } from 'react';
import { BrowserRouter } from 'react-router';
import Nav from './components/nav';
import Header from './components/header';
import Main from './components/main';

const App = () => {

  const [toggleNav, setToggleNav] = useState(false);

  return (
      <BrowserRouter>
        <Header setToggleNav={setToggleNav} />
        <Nav displayed={toggleNav} />
        <Main />
      </BrowserRouter >
  );
}

export default App;
