import * as React from 'react';
import {
  FormEvent,
  useState
} from 'react';
import './App.css';
import '../themes/light.scss';
import '../themes/dark.scss';
import {
  BrowserRouter as Router,
  Link,
  Route
} from 'react-router-dom';
import Locale from '../utils/locale/Locale';
import Home from './Home';
import BitcoinAddress from '../utils/bit/BitcoinAddress';

function App() {
  const [theme, setTheme] = useState('light');

  function selectTheme(event: FormEvent) {
    const target: HTMLInputElement = event.target as HTMLInputElement;
    setTheme(target.value);
  }

  function getAppClass() {
    return 'app theme-' + theme;
  }

  return <Router>
    <div className={getAppClass()}>
      <div className="nav">
        <div className="nav__top">YAUS</div>
        <div className="nav__body">
          <Link className="nav__item" to="/">Home</Link>
          <Link className="nav__item" to="/locale">Number Formatting</Link>
          <Link className="nav__item" to="/bit">Bitcoin Addresses</Link>
        </div>
      </div>
      <div className="main">
        <div className="header">
          <div className="header__title">Yet Another Utils Site</div>
          <select className="header__theme" value={theme} onChange={selectTheme}>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </div>
        <div className="content">
          <Route exact path="/" component={Home}/>
          <Route path="/locale" component={Locale}/>
          <Route path="/bit" component={BitcoinAddress}/>
        </div>
      </div>
    </div>
  </Router>;
}

export default App;
