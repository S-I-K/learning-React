import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Word from './Word';

export default function Day(){

    const day = useParams().day;
    const [words, setWords] = useState([]);
        /* useEffect(함수, 배열) 해당 배열의 상태값이 변경될때 함수실행 */
    // 배열에 빈 값을 넣으면 최초에 한번만 실행됨
    useEffect(()=>{
        fetch(`http://localhost:3002/words?day=${day}`) //프로미스 반환
        .then(res => {
            return res.json()
        })
        .then(data => {
            setWords(data);
        })
    }, []);


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