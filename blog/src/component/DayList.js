import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function DayList(){
    const [days, setDays] = useState([]);

    /* useEffect(함수, 배열) 해당 배열의 상태값이 변경될때 함수실행 */
    // 배열에 빈 값을 넣으면 최초에 한번만 실행됨
    useEffect(()=>{
        fetch('http://localhost:3002/days') //프로미스 반환
        .then(res => {
            return res.json()
        })
        .then(data => {
            setDays(data);
        })
    }, []);

    return(
    <ul className='list_day'>
    {days.map(day => (
        <li key={day.id}>
            <Link to={`/day/${day.day}`}>
            Day {day.day}
            </Link>
        </li>
    ))}
    </ul>
    );
}