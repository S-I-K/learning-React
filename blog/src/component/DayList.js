import { Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

export default function DayList(){
    /* useEffect(할일, 상태값배열) */
    /* Day, DayList의 useEffect 로직이 비슷함 => Custom Hooks */
    /* useFetch(url)을 넘겨줘서 ajax api 실행 후 값 배열로 얻어옴 */
    const days = useFetch('http://localhost:3002/days');

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