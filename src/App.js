import './styles/styles.scss'
import { Outlet } from "react-router-dom";
import TopInfoBar from './components/header/TopInfoBar';
import Banner from './components/header/Banner';
import MainNavBar from './components/header/MainNavBar';

function App() {
  return (
    <div className="App">
      <TopInfoBar />
      <Banner />
      <MainNavBar />
      <Outlet />
    </div>
  );
}

export default App;
