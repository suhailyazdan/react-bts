import './styles/styles.scss'
import { Outlet } from "react-router-dom";
import TopInfoBar from './components/header/TopInfoBar';
import Banner from './components/header/Banner';
import MainNavBar from './components/header/MainNavBar';
import Footer from './components/Footer';
import Scroller from './components/Scroller';

function App() {
  return (
    <div className="App">
      <TopInfoBar />
      <Banner />
      <MainNavBar />
      
      <Outlet />
      <Scroller />
      <Footer />
    </div>
  );
}

export default App;
