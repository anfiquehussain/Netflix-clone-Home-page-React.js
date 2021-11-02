import './App.css';
import {orginals,action, Mystery} from './urls'
import Banner from './Components/Banner/Banner';
import Navbar from './Components/Navbar/Navbar';
import Rowpost from './Components/RowPost/Rowpost';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <Rowpost url={orginals} title='Netflix Orginals'/>
      <Rowpost url={action} title='Action' isSmall/>
      <Rowpost url={Mystery} title='Mystery' isSmall/>
    </div>
  );
}

export default App;
