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

  handleOnChange1 = evt => {
    const name = evt.target.name;
    const checked = evt.target.checked;
    const value=this.state.Portugal;
    console.log('in on change',name,checked,value);
    if(checked){
      this.setState({Portugal:[...value,name]});
    }else{
      const newValue=value.filter(item=>item!==name);
      this.setState({Portugal:newValue});
    }
  }
  handleOnChange2 = evt => {
    const name = evt.target.name;
    const checked = evt.target.checked;
    const value=this.state.Nicaragua;
    console.log('in on change',name,checked,value);
    if(checked){
      this.setState({Nicaragua:[...value,name]});
    }else{
      const newValue=value.filter(item=>item!==name);
      this.setState({Nicaragua:newValue});
    }
  }
  handleOnChange3 = evt => {
    const name = evt.target.name;
    const checked = evt.target.checked;
    const value=this.state.Marshall;
    console.log('in on change',name,checked,value);
    if(checked){
      this.setState({Marshall:[...value,name]});
    }else{
      const newValue=value.filter(item=>item!==name);
      this.setState({Marshall:newValue});
    }
  }
  render() { 
    const {  Portugal,Nicaragua, Marshall}=this.state;
    console.log('sttae',Portugal,Nicaragua,Marshall);
    return (
      <div>
        <Navbar/>
        <div className='container'>
         <span><div className='left-box'>
           <h2> Portugal</h2>
            <div>
               <input type="checkbox" name="Aasiya jayavant" onChange={this.handleOnChange1}/>
               <label for="task1">Aasiya jayavant</label>
            </div>
           <div>
             <input type="checkbox" name="Luvleen Laurence"  onChange={this.handleOnChange1}/>
             <label for="task1">Luvleen Laurence</label>
             </div>

            <div>
              <input type="checkbox" name="Rey Melbourney" onChange={this.handleOnChange1}/>
              <label for="task1">Rey Melbourney</label>
              </div>
           <div>  
             <input type="checkbox"  name="Cayla Brister"  onChange={this.handleOnChange1}/>
             <label for="task1">Cayla Brister </label>onChange={this.handleOnChange1}
             </div>
             <h2> Nicaragua</h2>
            <div>
               <input type="checkbox" name="Deevidas Nandi" onChange={this.handleOnChange2}/>
               <label for="task1">Deevidas Nandi</label>
            </div>
           <div>
             <input type="checkbox" name="Obasey Chidy" onChange={this.handleOnChange2}/>
             <label for="task1">Obasey Chidy</label>
             </div>

            <div>
              <input type="checkbox" name="Xenie Dolezelova" onChange={this.handleOnChange2}/>
              <label for="task1">Xenie Dolezelova</label>
              </div>
           <div>  
             <input type="checkbox" name="Eziequiel Dengra" onChange={this.handleOnChange2}/>
             <label for="task1">Eziequiel Dengra</label>
             </div>
             <h2> Marshall Island</h2>
            <div>
               <input type="checkbox" name="Aaron Almaraz" onChange={this.handleOnChange3}/>
               <label for="task1">Aaron Almaraz</label>
            </div>
           <div>
             <input type="checkbox" name="Zelena Denisova" onChange={this.handleOnChange3}/>
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
