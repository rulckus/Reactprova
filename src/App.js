import './App.css'
import { Link } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <div>
        <Link className='butão' to='/endpoint'> Endpoint </Link>
      </div>
    </div>
  );
}

export default App;