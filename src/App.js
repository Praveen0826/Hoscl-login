import './App.css';
import{BrowserRouter,Routes,Route} from 'react-router-dom'
import LockScreen from './component/LockScreen';
import Newlogin from './component/Newlogin';
import ForgetPassword from './component/ForgetPassword';
import Emailverification from './component/Emailverification';
import Createpin from './component/Createpin';
import PinSection from './component/pin';
import Resetpin from './component/Resetpin';
import Signup from '../src/component/Signup'




function App() {
  return (

    <BrowserRouter>
    <Routes>

    <Route path='/' element={ <Signup/>}/>
    <Route path='/Resetpin' element={<Resetpin/>}/>
      <Route path='/Createpin' element={<Createpin/>}/>
      <Route path='/login' element={<Newlogin/>}/>
      <Route path='/Emailverify' element={<Emailverification/> }/>
      
      <Route path='/Forgotpassword' element={ <ForgetPassword/>}/>
      <Route path='/lockscreen' element={ <LockScreen/>}/>
      <Route path='/PinSection' element={ <PinSection/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
