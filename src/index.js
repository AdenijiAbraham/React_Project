//import the react and reactdon libraries

import React from 'react';
import ReactDOM from 'react-dom';


// create a react Component
const App = () => {
     const date = new Date();
     const hours = date.getHours();
     let timeOfDay;

       if(hours < 12) {
         timeOfDay = "Morning"
       }

       else if (hours >= 12 && hours < 20) {
         timeOfDay = "Afternoon"
       
       }

       else if (hours >= 16 && hours < 16) {
         timeOfDay = "Evening"
       }

       else {
         timeOfDay = "Night" 
       }

     return(
      <div>
         <h1 style={{color : "#ff8c00"}}> {/*we use {{}} we because the styling is an object thus object uses {{}} */}
            Good {timeOfDay}            {/*to reference javascript variable inside jsx we {} */}
         </h1>
    </div>

     );
};

//Take the reactcomponent and show it  on the screen
ReactDOM.render( 
   <App />, document.querySelector('#root')
);
        
 

