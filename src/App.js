
import './App.css';
import {useState} from 'react';
function App() {
  const [inputVal, SetInputVal] = useState("");
  return (
    <div className="App">
      <input type="text" value={inputVal} onChange={e => SetInputVal(e.target.value)}/>
      <button type="submit">Submit</button>
    </div>
  );
}

export default App;
