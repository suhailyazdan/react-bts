import './styles/styles.scss'
import Roots from "./Roots"
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>This is nav bar <span><Link to="/">Home</Link></span> <span><Link to="/about">About</Link></span></h1>
      <Roots />
    </div>
  );
}

export default App;
