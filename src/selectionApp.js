import { useState } from "react";
import "./style.css"

function SelectionApp (){
    const [myCounter , setMyCounter] = useState(1)
    const [myAdvices , setAdvices] = useState([
        "Learn HTML ",
        "Learn CSS ",
        "Learn JAVASCRIPT ",
        "LEARN NODEJS ",
        "LEARN MongoDB ",
        "LEARN REACT",
        "CONGRATS ! YOU ARE A DEVELOPER ! :D",
    ])

    function nextHandler(){

        console.log("NEXT")
        if(myCounter < 7){
            setMyCounter(myCounter + 1)
        }


    }

    function previousHandler(){

        console.log("PREVIOUS")
        if(myCounter >= 2){
            setMyCounter(myCounter - 1)
        }
        

    }

    return (
 <>
 
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>

        {
            Array.from([1,2,3,4,5,6,7] , x => (
                <div style={{height : "50px" , width : "50px" , backgroundColor : myCounter == x ? 'rgb(250, 180, 49)' : "gray"  , borderRadius: "50%" , textAlign : "center" , color : "white" , display : "flex"  , alignItems : "center" , justifyContent : "center"}}>
                    {
                        x
                    }
                    </div>
            ))
        }

        </div>
 
<p style={{textAlign: "center" , fontWeight : "900" , }}>
    {
        myAdvices[myCounter - 1]
    }
    </p> 
    <div style={{display : "flex" , justifyContent :"space-around"} }>
    {
        Array.from(["Previous" , "Next"], btns => (
            <button onClick={btns == "Previous" ? previousHandler : nextHandler}>{btns}</button>
        ))
    }



    </div>
 
 
 
 
 
 
 </>








    )
    















































}

export default SelectionApp