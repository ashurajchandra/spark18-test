import React, { Component } from 'react';
import PortugalCity from './portugal';
import NicaraguaCity from './nicaragua';
import MarshallCity  from './marshal';
class city extends Component {
    render() {
        const {  Portugal,Nicaragua, Marshall}=this.props;
        console.log('inside cityPortugal',Portugal);
        console.log('inside city Nicara',Nicaragua);
        console.log('inside cityMarshal',Marshall);
        return (
            <div>
                {
                Portugal.length>0 && <PortugalCity Portugal={Portugal}/>}

               { Nicaragua.length>0 && <NicaraguaCity Nicaragua={Nicaragua}/>}
               { Marshall.length>0 && <MarshallCity Marshall={Marshall}/>}
            </div>
        );
    }
}

export default city;