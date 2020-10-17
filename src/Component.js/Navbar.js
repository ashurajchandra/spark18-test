import React  from 'react';


const Navbar=(props)=>
{

    return(
        <div className='nav-bar'>
           <span ><div className='logo'> Logo</div></span>
           <span ><div className='home'> Home</div></span>
            <span ><div className='portfolio'> My Portfolio</div></span>
            <span ><div className='clients'>Clients</div></span>
            <span><button className='contact'> Get in touch</button></span>
         

        </div>
    )
}




export default Navbar;
