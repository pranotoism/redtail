import logo from './logo.svg';
import './App.css';
import Button  from "pranotoism-red-tail";
import {useState} from 'react'

function App() {

  const [Number, setNumber] = useState(0)
  return (
    <div className="App">
      <header className="App-header">
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonColor="primary"
          buttonSize="btn--medium"
          onClick={() => {
            setNumber(Number+1)
          }}
        >
          Test
        </Button>
        <p>{Number}</p>
      </header>
    </div>
  );
}

export default App;
