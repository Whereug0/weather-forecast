import Info from '../Info/Info';
import './App.scss';
import icon from '../../assets/icons/icon.svg'
import Menu from '../Menu/Menu';
import Activities from '../Activities/Activities';

import forecast from '../../assets/images/24hrs forecast.png';
import Content from '../Content/Content';

function App() {
  return (
    <div className="App">
      <div className='info-wrapp'>
        <Info/>
        <img className="cloud-img" src={icon} alt=''/>
      </div>
      <div className='content-wrapp'>
        <Menu className="menu"/>
        <div className='content'>
          <Activities />
          <img className='forecast-img' src={forecast} alt='forecast'/>
        </div>
        <Content />
      </div>
    </div>
  );
}

export default App;
