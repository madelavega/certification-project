import { BrowserRouter } from 'react-router';
import Nav from './components/nav';
import Header from './components/header';
import Main from './components/main';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Nav/>
      <Main />
    </BrowserRouter >
  );
}

export default App;
