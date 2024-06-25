import React from 'react';
import ReactDOM from 'react-dom';
import "semantic-ui-css/semantic.min.css";
import { faker } from '@faker-js/faker';
import ComponentDetails from "./componentDetail.js"; // Assuming component details are in a separate file
import ApprovalCard from './ApprovalCard.js';

const App = () => {
  return (
    <div className="ui container comments">
    <ApprovalCard> 
       <ComponentDetails 
          author ="Abraham" 
          timeOfPost="Today at 6:43pm" 
          comment ="well said" 
          avata = {faker.image.avatar()} />  
    </ApprovalCard>

   <ApprovalCard>
       <ComponentDetails 
          author ="Alex" 
          timeOfPost="yesterday at 2:43pm" 
          comment ="Nice blog post" 
          avata = {faker.image.image()} /> 
   </ApprovalCard>

    <ApprovalCard>
        <ComponentDetails 
          author ="Eliza" 
          timeOfPost="Today at 3: am" 
          comment ="praise God, Nice content" 
          avata = {faker.image.city()} />
    </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));   
