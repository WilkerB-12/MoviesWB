//libraries
import{Routes,Route} from 'react-router-dom';

//components
import Login from './components/Login';
import Listado from './components/Listado';
import Header from './components/Header';
import Footer from './components/Footer';
import Detalle from './components/Detalle';

//Styles
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
  <>
  <Header/>
    <div className='container'>
      <Routes>
        <Route exact path='/' element={<Login/>}/>
        <Route exact path='/listado' element={<Listado/>}/>
        <Route exact path='/detail' element={<Detalle/>}/>
      </Routes>
    </div>
    
  <Footer/>
  </>
  )
  ;
}

export default App;
