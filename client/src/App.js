import './App.css';
import Main from './Component/Main';
import CheckTime from './Component/CheckTime';
import Navbar from './Component/Navbar';
import Footer from './Component/Footer';

function App() {
  return (
    <>
         <Navbar/>  
         <Main/>
         <div className="line2"></div>
         <CheckTime/>
         <Footer/>
    </>
  )
}

export default App;
