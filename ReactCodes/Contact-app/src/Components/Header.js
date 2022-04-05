import React from 'react'; //import react

const Header =() =>{ //create a functional component
    return ( // using classes of semantic ui 
    // we cannot class as selectors here bcoz class in js are classes for object oriented programming
    //so that's why, we gotta use a class name.
    //so this is a simple difference between using simple HTML & writing a jsx.
       <div className = "ui fixed menu">
           <div className="ui container center">
         <h2>Contact manager form</h2>
       </div> 
       </div> 
    );

}
export default Header; 