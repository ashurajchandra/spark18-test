import React from 'react';
import '../index.css';
import Navbar from "./Navbar";
import City from './city';

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
  remove1=(name)=>{
    const {Portugal}=this.state;
   let dom= document.getElementById(`${name}`);
   console.log('dom',dom);
   dom.checked=false;

    const newValue=Portugal.filter(item=>item!==name);
    this.setState({Portugal:newValue});
  }
  remove2=(name)=>{
    const {Nicaragua}=this.state;
    let dom= document.getElementById(`${name}`);
    console.log('dom',dom);
    dom.checked=false;
    const newValue=Nicaragua.filter(item=>item!==name);
    this.setState({Nicaragua:newValue});
  }
  remove3=(name)=>{
    const {Marshall}=this.state;
    let dom= document.getElementById(`${name}`);
    console.log('dom',dom);
    dom.checked=false;
    const newValue=Marshall.filter(item=>item!==name);
    this.setState({Marshall:newValue});
  }
  render() { 
    const {  Portugal,Nicaragua, Marshall}=this.state;
    console.log('sttae',Portugal,Nicaragua,Marshall);
    return (
      <div>
        <Navbar/>
        <div className='container'>
         <div className='left-box'>
           <h2> Portugal</h2>
            <div>
               <input type="checkbox" name="Aasiya jayavant" id="Aasiya jayavant" onChange={this.handleOnChange1}/>
               <label for="task1">Aasiya jayavant</label>
            </div>
           <div>
             <input type="checkbox" name="Luvleen Laurence" id="Luvleen Laurence"  onChange={this.handleOnChange1}/>
             <label for="task1">Luvleen Laurence</label>
             </div>

            <div>
              <input type="checkbox" name="Rey Melbourney" id="Rey Melbourney"  onChange={this.handleOnChange1}/>
              <label for="task1">Rey Melbourney</label>
              </div>
           <div>  
             <input type="checkbox"  name="Cayla Brister"  id="Cayla Brister"  onChange={this.handleOnChange1}/>
             <label for="task1">Cayla Brister </label>
             </div>
             <h2> Nicaragua</h2>
            <div>
               <input type="checkbox" name="Deevidas Nandi"  id="Deevidas Nandi" onChange={this.handleOnChange2}/>
               <label for="task1">Deevidas Nandi</label>
            </div>
           <div>
             <input type="checkbox" name="Obasey Chidy" id="Obasey Chidy"onChange={this.handleOnChange2}/>
             <label for="task1">Obasey Chidy</label>
             </div>

            <div>
              <input type="checkbox" name="Xenie Dolezelova" id="Xenie Dolezelova" onChange={this.handleOnChange2}/>
              <label for="task1">Xenie Dolezelova</label>
              </div>
           <div>  
             <input type="checkbox" name="Eziequiel Dengra" id="Eziequiel Dengra" onChange={this.handleOnChange2}/>
             <label for="task1">Eziequiel Dengra</label>
             </div>
             <h2> Marshall Island</h2>
            <div>
               <input type="checkbox" name="Aaron Almaraz" id="Aaron Almaraz" onChange={this.handleOnChange3}/>
               <label for="task1">Aaron Almaraz</label>
            </div>
           <div>
             <input type="checkbox" name="Zelena Denisova" id="Zelena Denisova" onChange={this.handleOnChange3}/>
             <label for="task1">Zelena Denisova</label>
             </div>
          </div>
          <div className='right-box'>
           {Portugal.length==0 && Nicaragua.length==0 && Marshall.length==0?<h3>Nothing To Show </h3>: <City Portugal={Portugal} Nicaragua={Nicaragua} Marshall={Marshall}  remove1={this.remove1} remove2={this.remove2} remove3={this.remove3} />}
              
           </div>
        </div>


      </div>
    );
  }
}

export default App;
