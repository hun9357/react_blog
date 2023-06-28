import logo from './logo.svg';
import './App.css';
import {useState} from 'react'

function App() {

  let post = 'title1';
  // destructring title will hod 'database design recommendation'
  let [title,b] = useState('database design recommendation')
  //state used for re-rendering when the data changes often


  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{fontSize:'18'}}>BLOG</h4>
      </div>
      <div className="list">
        <h4>{title}</h4>
        <p>posted 06/28/2023</p>
      </div>
    </div>
  );
}

export default App;
