import React, { useEffect, useState } from 'react'

export default function UseEffectA() {
    
    // נתונה הדוגמא הבאה :
    // document.getElementById("moo")?.addEventListener('click' , ()=>{ 
        // הבאתי פה דוגמא על URL
        //  ובקשת fetch
        //  בגלל שזה עניין של "בקשות שאינם קשורות לדף"
            // const result = fetch("http:// localhost:2000/");
            // console.log(result);
        // })
    
    // אם נעשה כמו למעלה - זה לא יעבוד - אני חייב להכניס את זה לתוך 
    // useEffect
    // useEffect(() => {
    //     document.getElementById("moo")?.addEventListener('click' , ()=>{
    //         console.log("")
    //     })
    // });

    // הוא כל רינדור מוסיף addEventlisiner
    // אז בעצם כל רינדור הוא "מעמיס " עוד האזנה והוא מפעיל את כולם באותו event
    // העמסה של האזנות - זה כמו 10 טאבים בדפדפן - יצרתי המון האזנות על דבר אחד שקורה - זה לא טוב

    // אם נעשה ככה :
    // useEffect(() => {
    //     setTimeout(() => {
    //         console.log("ff");
    //     }, 3000)
    // });
    // ה - setTimeOut - מכפיל את עצמו בכל קריאה


    // לעומת זאת - אם אעשה בצורה הבאה :
    const [results, setResults] = useState([]);
    // useEffect(() => {
    //     setTimeout(() => {
    //         console.log("ff");
    //     }, 3000)
    // } , [results]);

    // אם אחליט לעשות איזשהו input
    const [momo, setMomo] = useState("");

    useEffect(() => {
        setTimeout(() => {
            console.log("ff");
        }, 3000)
    }, [results, momo]);

    // אבל למעשה נשאר לנו עוד בעיה :
    // ריהקט לא עושה שינוי כל עוד הדף לא נטען
    // אבל ...
    //  עשינו setTimeOut אני לא רוצה שהוא יקרה סתם 5 פעמים עבור כל לחיצה - הוא מעמיס פה האזנות
    // כל שינוי של ריזולטס - יביא לנו רשימה של דברים - עוד איבנט ועוד איבנט

    // הדבר שמפנה נקרא קלין אפ
    // שיזכור לפהי כל הפעלה נוספת של ה cb שלי אני יבדוק אם יש משהו לנקות
    // ופה מתי שאני בא להפעיל מחדש את CB אני רואה שיש לי איזשהו איבנט קודם שנמצא שם ממקודם שהפעלתחי

    // אעך אני עושה
    // הוא קודם כל יריץ את ה return ואח"ע=כ יפעיל את היוז אפפקט

    useEffect(() => {
        const handClick = () =>{
            console.log("click");
        } 
        document.getElementById("moo")?addEventListener(('click') , handClick);
        // return בתוך יוז אפקט מיועדת לנירוי אלמנטים מהיוז אפקט
        return () =>{
            console.log("clear");
            document.getElementById("moo")?removeEventListener(('click') , handClick)
        };

    },[results]);
    // אני בעצם מעביר לו cb והוא מפעיל אותו פעם אחת בהתחלה -      
    // 
    // ועכשיו מה שעשיתי - לקחתי את הקליק הקודם ופשוט מחרקתי אותו דרך ה "קלין אפ" 
    // מה שמוציא לי את החזרתיות


    // בעצם - כל מה שיש לי אני יכול לעשות גם בלי useEffect
    // כל מה שלא קשור לריהקט = API/א-סינכרוניות
    // ועוד
    // במקרים כאלה אני יקח את הקלין אפ - וינקה משהו שעדיין לא סיים - או ימחק פעולות שהוא כבר ביצע אך יעשה אותם שוב - עוד האזנות וכדומה 
    // ואז אני מרוויח שהוא ירוץ עליהם פעם אחת בלבד


    // אז למעשה - ראיתי קצת GPT הוא מריץ את הדף /קומפוננטה כסדר
    // ה - useEffect נועד למקרים בהם הרינדור הוא "מחוץ" לדף כמו API או כמו ערכים של א-סינכרוניות וכאלה - אז אני מטעין את האזנה לדבר הזה וקורא אותו אל הדף - מרנדר אותו לדף

    

    // 
}
return (
    <div className='bb' id='moo'>

        <input onChange={e => setMomo(e.target.value)} type="text" value={momo} />

        <button onClick={ }></button>
    </div>
)

