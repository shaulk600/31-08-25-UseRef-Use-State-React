// להעביר ל A


// זה אמור להיות בריהקטו
function a() {
    const [result, setResult] = useState([]);
    for (let i = 0; i < result.length; i++) {
        result[i].id = i;

    }
    const nameRef = useRef("");
    if (!nameRef.current) { // יגרום לזה שרק בפעם הראשונה הוא ישאל אותו ערך
        nameRef.current = prompt("enter your name: ");
    }
    console.log(`hui`);


    return (
        <div div classname="">
            {
                nameRef.current
            }
        </div>

    )



}
