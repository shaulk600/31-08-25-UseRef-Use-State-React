import React, { useState, useRef } from 'react'

export default function Use() {
  const [inputState, setInputState] = useState("");


  // // שימוש ב useRef
  // const inputRef = useRef(null);
  // inputRef.current.value

  // inputRef.current = prompt("enter your input: "); // אולי לא פרומפט אלא לתוך ה input


  {/* השינוי של הרינדור */ }
  console.log(`reee`);
  // onchange ששינוי קורה ןמפוא הוא יתעדכן




  const inputRef = useRef(null); //עדיף לשים לו בטטיפסקריפט נל





  return (
    <div>
      <input value={inputState} />
      {/* more opshtion that one value and not cange */}
      <input defaultValue={inputState} />




      <input onChange={e => setInputState(e.target)} Value={inputState} />
      {/* הצעד הבא ידגים שימוש בסטייט - כדי לרוקן אותו */}
      <button onClick={() => setInputState("")}> Reset</button>
      {/* אגב החיסרון של זה שזה יתרנדר אחד אחרי השני */}




      {/* שימוש בUSEREF */}
      <input defaultValue={inputState} ref=(inputRef) type="text"/> 
      {/* זה אדום גם לו */}
      <input value={inputState} ref={inputRef}ef=(inputRef) type="text"/> 
      <input ref={inputState} type='text' />
      <button onClick={() => inputRef.current.value = ""}> Reset</button>
      {/* כדי שלא יהיה אדום */}
      <button onClick={() => if(inputRef.current)inputRef.current.value = ""}> Reset</button>

      {/* כשאתה עושה נקודה value אתה משנה את ה DOM אתה לא "מרנדר" */}

      
    </div>
  )
}
