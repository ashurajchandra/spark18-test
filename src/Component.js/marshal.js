import React, { Component } from 'react';

class marshal extends Component {
   
    render() {
        const {Marshall,remove3}=this.props;
        console.log('checking marhsal',Marshall);
        return (
            <div>
                <h2>Marshal</h2>
                <ul>
                {Marshall.map(item=><li><h4>{item}</h4> <button onClick={()=>remove3(item)}>Remove</button></li>)}
                </ul>
            </div>
        );
    }
}

export default marshal;