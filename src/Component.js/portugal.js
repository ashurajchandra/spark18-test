import React, { Component } from 'react';

class portugal extends Component {
    render() {
        const {Portugal}=this.props;
        return (
            <div>
                <ul>
                <h2>Portugal</h2>
                {Portugal.map(item=><l1><h4>{item}</h4></l1>)}
                </ul>
            </div>
        );
    }
}

export default portugal;