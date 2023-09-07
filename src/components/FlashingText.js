import { React, useState, useEffect } from 'react';

let defaultWeight = 200
let num = 0

const FlashingText =()=> {
    const [newWeight, setNewWeight] = useState(defaultWeight);

    useEffect(() => {
        const intervalId = setInterval(() => {
            updateWeight();
        }, 1000);
        return () => clearInterval(intervalId);
    },[])

    function updateWeight () {
        num+=1
        setNewWeight(update());
    }

    function update() {
        if(num % 2 === 0){
            defaultWeight= 200;
        } else {
            defaultWeight=800;
        }
        return(defaultWeight)
    }


    return (
        <> 
        <h1 style={{ fontWeight:[newWeight]}}>Black Friday Sales</h1>
        <h2>Are almost here...</h2>      
        </>
    );
}

export default FlashingText;
