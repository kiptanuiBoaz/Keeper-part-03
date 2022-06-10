import React, { useState } from "react";

function CreateArea(props) {

  const [inputText, setInputText] = useState([{
    title: "",
    content: ""
  }]);

  function addInputText (event){
    // const {value, name} = event.target
      
    setInputText ( ()=>{
      const newValue = event.target.value;
        
      return( 
        setInputText( newValue)
      )
      
        
      
    })  
  }

  
  return (
    <div>
      <form>
       {/* Tap into the value bieng entered and assing in a name so it can be passed to app and put an array */}
        <input onChange={addInputText}  value =""  name="title" placeholder="Title" />
        <textarea onChange = {addInputText} value =""  name="content" placeholder="Take a note..." rows="3" />
        {/* when button is clicked, pass the entered values and pass it along with a function with a fn */}
        {/* set the variable to empty afterwards */}
        <button onClick ={ ()=> { props.btnClicked (inputText); setInputText({title: "",content: ""})}}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
