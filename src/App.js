import './App.css';
import{BrowserRouter,Routes,Route} from 'react-router-dom'
import LockScreen from './component/LockScreen';
import Newlogin from './component/Newlogin';
import ForgetPassword from './component/ForgetPassword';
import Emailverification from './component/Emailverification';




function App() {
  return (

    <BrowserRouter>
    <Routes>
      <Route path='/' element={<ForgetPassword/>}/>
      <Route path='/login' element={<Newlogin/>}/>
      <Route path='/Emailverify' element={<Emailverification/> }/>
      <Route path='/lockscreen' element={ <LockScreen/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
