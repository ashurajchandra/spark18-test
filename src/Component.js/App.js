import React from 'react';
import '../index.css';
import Navbar from "./Navbar";

class App extends React.Component {
  constructor(){
    super();
    this.state={
      Portugal:[],
      Nicaragua:[],
      Marshall:[]
    }


    }

  onChange = evt => {
    const name = evt.target.name;
    const checked = evt.target.checked;
  }
  
  render() { 
    const {  Portugal,Nicaragua, Marshall}=this.state;
    return (
      <div>
        <Navbar/>
        <div className='container'>
         <span><div className='left-box'>
           <h2> Portugal</h2>
            <div>
               <input type="checkbox" id="task1"/>
               <label for="task1">Aasiya jayavant</label>
            </div>
           <div>
             <input type="checkbox" id="task1"/>
             <label for="task1">Luvleen Laurence</label>
             </div>

            <div>
              <input type="checkbox" id="task1"/>
              <label for="task1">Rey Melbourney</label>
              </div>
           <div>  
             <input type="checkbox" id="task1"/>
             <label for="task1">Cayla Brister</label>
             </div>
             <h2> Nicaragua</h2>
            <div>
               <input type="checkbox" id="task1"/>
               <label for="task1">Deevidas Nandi</label>
            </div>
           <div>
             <input type="checkbox" id="task1"/>
             <label for="task1">Obasey Chidy</label>
             </div>

            <div>
              <input type="checkbox" id="task1"/>
              <label for="task1">Xenie Dolezelova</label>
              </div>
           <div>  
             <input type="checkbox" id="task1"/>
             <label for="task1">Eziequiel Dengra</label>
             </div>
             <h2> Marshall Island</h2>
            <div>
               <input type="checkbox" id="task1"/>
               <label for="task1">Aaron Almaraz</label>
            </div>
           <div>
             <input type="checkbox" id="task1"/>
             <label for="task1">Zelena Denisova</label>
             </div>
          </div></span> 
         <span>  <div className='right-box'></div></span> 
        </div>


      </div>
    );
  }
}

export default App;
