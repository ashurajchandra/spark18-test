import React, { Component } from 'react';
import PortugalCity from './portugal';
import NicaraguaCity from './nicaragua';
import MarshallCity  from './marshal';
class city extends Component {
    render() {
        const {  Portugal,Nicaragua, Marshall,remove1,remove2,remove3}=this.props;
        console.log('inside cityPortugal',Portugal);
        console.log('inside city Nicara',Nicaragua);
        console.log('inside cityMarshal',Marshall);
        return (
            <div>
                {
                Portugal.length>0 && <PortugalCity Portugal={Portugal} remove1={remove1} />}

               { Nicaragua.length>0 && <NicaraguaCity Nicaragua={Nicaragua} remove2={remove2}/>}
               { Marshall.length>0 && <MarshallCity Marshall={Marshall} remove3={remove3}/>}
            </div>
        );
    }
}

export default city;