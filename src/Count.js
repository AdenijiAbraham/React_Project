// Count component
const Count = props => {
    let styles; //defining stylesfor usage

    if(props.counter === 0) {
        styles ={
            color  : 'red' 
        }
    } 
    
    else if(props.counter >= 1 && props.counter  <= 10) {
        styles ={
            color  : 'orange' 
        }
    } 

    else if(props.counter >= 50 && props.counter  <= 100) {
        styles ={
            color  : 'yellow' 
        }
    } 
    
    return (
        <div>
         <h1 style={styles}>{props.counter} </h1>
        </div>
    );
};

export default Count;

   