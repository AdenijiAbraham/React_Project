/*import React from "react";
import ReactDom from "react-dom";
const App = () => {
    return(
        <div>
           this is Abraham
        </div>

    );

};

ReactDom.render(<App />, document.querySelector('#root'));*/
 
//class component

/*import React, { Component } from "react";
import ReactDom from "react-dom";

class App extends Component {
    render(){
        return(
            <div>
                Abraham champion
            </div>
        )
    }
}

ReactDom.render(<App />, document.querySelector('#root'));*/

//state

import React, { Component } from "react";
import ReactDom from "react-dom";

import Count from "./Count";
import Button from "./Button";

import 'semantic-ui-css/semantic.min.css'

  //App component
class App extends Component{ 
    state = {
        count : 0
    }

    //numbertoadd is a parameter
    // everry corresponding parameter must have an argument
    incrementCount = numbertoadd => {
        this.setState ( prevstate => {
            return {
                 count : prevstate.count + numbertoadd
                 }

        })
    }
    
    render() {
        return(
            <div style= {{textAlign : 'center'}}>
                <br />
               <Count counter = {this.state.count}/> 
               <br />
               <Button incrementCount ={this.incrementCount} value ={1} />
               <Button incrementCount ={this.incrementCount} value ={5} />
               <Button incrementCount ={this.incrementCount} value ={10} />
               <Button incrementCount ={this.incrementCount} value ={100} />
               <Button incrementCount ={this.incrementCount} value ={1000} />
            </div>
        );
    };
};

ReactDom.render(<App />, document.querySelector('#root'));

