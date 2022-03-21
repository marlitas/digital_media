import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './components/header/header';
import Home from './components/home/home';
import Footer from './components/footer/footer'
import Portfolios from './components/portfolios/portfolios'
import Portfolio from './components/portfolios/portfolio'

function App() {
  return (
    <>
      <Header title='Digital Media Arts'/>
      <Routes>
        <Route exact path='/'
          element={<Home/>}
        >
        </Route>
        <Route path='/portfolios'
          element={<Portfolios/>}
        >
          <Route path=':name' element={<Portfolio/>}/>
        </Route>
        <Route path='/contact'
        >
        </Route>
        <Route path='/resources'
        >
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
