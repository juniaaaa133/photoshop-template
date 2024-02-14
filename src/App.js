import { MemoryRouter } from 'react-router';
import Work from './Components/Work';
import ButtonX from './ELEMENTX/Ui/Buttons/ButtonX';
import ButtonY from './ELEMENTX/Ui/Buttons/ButtonY';
import './ELEMENTX/abstract/abstract.css';
import Home from './Pages/home/Home';
import Navb from './Pages/nav/Navb';
import MyPages from './Routes/Routers/MyPages';

function App() {
  return (
   <>
  {/* <ButtonX text={'press me'}/> */}
<MyPages/>
 
   </>
  );
}

export default App;
