import React, { Component } from 'react';

class nicaragua extends Component {
    render() {
        const {Nicaragua,remove2}=this.props;
        return (
            <div>
                <h2>Nicaragua</h2>
                <ul>
                {Nicaragua.map(item=><li><h4>{item}</h4>  <button onClick={()=>remove2(item)}>Remove</button></li>)}
                </ul>
            </div>
        );
    }
}

export default nicaragua;