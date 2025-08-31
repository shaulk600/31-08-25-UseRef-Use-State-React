import { useState, useEffect } from 'react';
// import { createConnection } from "module";
export default function UseEffectExempleGood({ roomId = "" }) {

    // לצורך ההדגמה ושלא יהיה 
    // error 
    // נעשה 
    function createConnection(a, b) {
        const obj = {
            connect: () => console.log("יש חיבור"),
            disconnect: () => console.log("אין חיבור")

        }
        return obj;
    }
    // סוף הדגמא - במקום 
    // import

    // דוגמא לבקשת fetch
    // שזה בעצם בקשה חיצונית - לא קשורה לדף עצמו
    const [serverUrl, setServerUrl] = useState('https://localhost:1234');

    useEffect(() => {
        // יצירת קישור אל הדאטה בייס ובדיקה האם השתנה שם משהו
        const connection = createConnection(serverUrl, {
            method: 'POST',
            body: {}
        });
        connection.connect();

        // כדי שלא יהיו כמה חיבורים ביחד לאותו DB
        //  אחרי כל 'רינדור' נעשה :
        return () => {
            connection.disconnect(); // בעצם 'מחקתי' את החיבור שכרגע קיים
        };

    }, [serverUrl, roomId]);


    return (
        <div>


        </div>
    )
}

// הדוגמא מהאתר

// import { useState, useEffect } from 'react';
// import { createConnection } from './chat.js';

// function ChatRoom({ roomId }) {
//   const [serverUrl, setServerUrl] = useState('https://localhost:1234');

//   useEffect(() => {
//     const connection = createConnection(serverUrl, roomId);
//     connection.connect();
//     return () => {
//       connection.disconnect();
//     };
//   }, [serverUrl, roomId]);
//   // ...
// }




