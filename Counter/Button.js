//Button Component
 
import React, { Component } from "react";

class Button extends Component {
    //increment value is the argument for numbertoadd parameter in  index.js file
    incrementvalue = () => {
        this.props.incrementCount(this.props.value)
    }

    render() {
        return( 
            // this.incrementvalue  is used bcos props can not be used for copmonents
        //   inside the file
        <button  className ="ui button green"onClick={this.incrementvalue}> + {this.props.value}</button>                 
        )
    }
}

export default Button;

{/*class component has an inbuit props 
                unlike functional component where we must specify the props that is pass the parameter   */}
