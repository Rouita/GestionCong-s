import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './layout/Navbar';
import MYHOME from './pages/MYHOME';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import Adduser from './users/Adduser';
import Edituser from './users/Edituser';
import Login from './pages/Login';
import Rh from './pages/Rh';
import Cadre from './pages/Cadre';
import Ahmed from './pages/Ahmed';
import Mlogo from './images/Mlogo.png'; 
import Formd from './pages/Formd';
import Infosp from './pages/Infosp';
import Showd from './pages/Showd';
import Viewuser from './users/Viewuser';
import Validerd from './pages/Validerd';
import Listev from './pages/Listev';
import Lister from './pages/Lister';



function App() {
  return (
    <div className="App">
     <Router>
     <Navbar />
     <img
  src={Mlogo}
  alt="Logo de l'entreprise"
  className="image-styling"
  width="460" // Ajustez la largeur en pixels
  height="200" // Ajustez la hauteur en pixels
/>

<Routes>
  <Route exact path='/' element={<MYHOME/>}/>
  <Route exact path='/adduser' element={<Adduser/>}/>
  <Route exact path='/edituser/:id' element={<Edituser/>}/>
  <Route exact path='/viewuser/:id' element={<Viewuser/>}/>
  <Route exact path='/login' element={<Login/>}/>
  <Route exact path='/rh' element={<Rh/>}/>
  <Route exact path='/cadre' element={<Cadre/>}/>
  <Route exact path='/ahmed' element={<Ahmed/>}/>
  <Route exact path='/formd' element={<Formd/>}/>
  <Route exact path='/infosp' element={<Infosp/>}/>
  <Route exact path='/showd' element={<Showd/>}/>
  <Route exact path='/validerd' element={<Validerd/>}/>
  <Route exact path='/listev' element={<Listev/>}/>
  <Route exact path='/lister' element={<Lister/>}/>








  






</Routes>

     </Router>
     

    </div>
  );
}

export default App;
