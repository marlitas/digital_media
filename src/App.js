import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/header/header';
import Home from './components/home/home';

function App() {
  return (
    <div className="App">
      <Header title='Digital Media Arts'/>
      <Routes>
        <Route exact path='/'
          element={<Home/>}
        >
        </Route>
      </Routes>
    </div>
  );
}

export default App;
