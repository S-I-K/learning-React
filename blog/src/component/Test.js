import { useEffect, useState } from 'react';




export default function Test(){
    const [days, setDays] = useState('Mon');
    const [count, setCount] = useState(0);
    useEffect(()=>{
        console.log('count start');
    }, [count]);
    useEffect(()=>{
        console.log('days start');
    }, [days]);

    function click1(){
        setCount(count + 1);
    }
    function click2(){
        setDays(days==='Mon' ? 'tue':'Mon');
    }

    /* fetch */
    fetch('http://localhost:3002/days')
    .then((res)=>{return res.json()})
    .then((data)=>{console.log(data)});


    return(
        <>
        <button onClick={click1} style={{marginRight: "12px"}}> {count} </button>
        <button onClick={click2}> {days} </button>
        </>
    );
}