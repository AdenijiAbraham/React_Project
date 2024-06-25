import React from 'react';
import { faker } from '@faker-js/faker';

/*Reactdom is for the execution of our app thus you only import ReactDOM inside of index.js file */

const ComponentDetails = (props) => {
    return  (                                                /*functions must always have a 'return()' statement*/
        <div className="comment">
        <a href="/" className="avatar">
        <img alt='avatar' src={props.avata}/>
        </a>
        <div className="content">
            <a href="/" className="author">
               {props.author}
            </a>
            <div className="metadata">
                <span className="date">{props.timeOfPost} </span>
            </div>
            <div className="text">
                {props.comment}
            </div>
        </div>
        </div>

    );                               
};      

export default ComponentDetails;       /* you must make  a component available  to others files  by exporting in the component files*/
                                             /*you import at the destination file e.g.,  index.js file*/
