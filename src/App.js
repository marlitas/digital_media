import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Routes, Route} from 'react-router-dom';
import Header from './components/header/header';
import Home from './components/home/home';
import Footer from './components/footer/footer'
import Portfolios from './components/portfolios/portfolios'
import Portfolio from './components/portfolios/portfolio'
import Upload from './components/upload/upload'

function App() {
  return (
    <>
      <Header title='Digital Media Arts'/>
        <Routes>
          
          <Route exact path='/'
            element={<Home/>}
          >
          </Route>
          <Route path='/portfolios'>
            <Route index element={<Portfolios />}/>
            <Route path=':name' element={<Portfolio/>}/>
          </Route>
          <Route path='/contact'
          >
          </Route>
          <Route path='/resources'
          >
          </Route>
          <Route path='/upload' element={<Upload/>}>
          </Route>
        </Routes>
      <Footer />
    </>
  );
}

export default App;
