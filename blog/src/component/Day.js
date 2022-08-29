import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import Word from './Word';

export default function Day(){

    const day = useParams().day;
    /* useEffect(할일, 상태값배열) */
    /* Day, DayList의 useEffect 로직이 비슷함 => Custom Hooks */
    const words = useFetch(`http://localhost:3002/words?day=${day}`);


    return(
        /* dummy.words */
    <>
    <h2>Day {day}</h2>
    <table>
        <tbody>
            {words.map(word => (
                <Word word={word} key={word.id} />
            ))}
        </tbody>
    </table>
    </>
    );
}