/* Custom Hooks */
import { useState, useEffect } from 'react';

export default function useFetch(url){
    const [data, setData] = useState([]);
    console.log(typeof data);
    /* useEffect(할일, 상태값배열) */
    /* Day, DayList의 useEffect 로직이 비슷함 => Custom Hooks */
    useEffect(()=>{
        fetch(url) //현재 url의 day에 부합하는 데이터를 읽기
        .then(res => {
            return res.json()
        })
        .then(data => {
            setData(data);
        })
    }, [url]);

    return data;
}