/*eslint-disable*/ 

import './App.css';
import {useState} from 'react'


function App() {

  let post = 'title1';
  // destructring title will hod 'database design recommendation'
  let [title,b] = useState(['Database design recommendation','what is coding','Python for beginners'])
  let [likes,likesChange] = useState(0)
  //state used for re-rendering when the data changes often

  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{fontSize:'18'}}>BLOG</h4>
      </div>
      <div className="list">
        <h4>{title[0]} <span onClick= {()=>{likesChange(likes+1)}}>👍</span> {likes} </h4>
        <p>posted 06/28/2023</p>
      </div>



      <div className="list">
        <h4>{title[1]}</h4>
        <p>posted 06/28/2023</p>
      </div>
      <div className="list">
        <h4>{title[1]}</h4>
        <p>posted 06/28/2023</p>
      </div>
    </div>
  );
}

export default App;
