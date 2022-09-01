import { useRef } from 'react';
import { useHistory } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

export default function CreateWord(){


    const days = useFetch('http://localhost:3002/days');
    /* useRef(초기값), input에 연결해줘야함 ref={ }, 해당요소의 value를 가져옴 */
    const engRef = useRef(null);
    const korRef = useRef(null);
    const dayRef = useRef(null);
    /* useHistory('보내고싶은 url'), reactRoute에서 지원, <Link to={}>처럼 사용 */
    const history = useHistory();



    function onSubmit(e){
        e.preventDefault();
        // console.log(engRef.current.value);
        // console.log(korRef.current.value);
        // console.log(dayRef.current.value);

        fetch(`http://localhost:3002/words/`, {
            //method type
            method: 'POST',

            //content type
            headers: {
                'Content-Type' : 'application/json'
            },

            //수정될 혹은 추가될 내용
            body: JSON.stringify({
                day: dayRef.current.value,
                eng: engRef.current.value,
                kor: korRef.current.value,
                isDone: false
            }),
        })
        .then(res => {
            if(res.ok){
                alert('word create success !');
                history.push(`day/${dayRef.current.value}`); //localhost:3002/day/${dayRef.current.value}
            }
        });
    }


    return(
        <form onSubmit={onSubmit}>
            <div className='input_area'>
                <label>Eng</label>
                <input type='text' placeholder='life line' ref={engRef}/>
            </div>

            <div className='input_area'>
                <label>Kor</label>
                <input type='text' placeholder='생선' ref={korRef}/>
            </div>

            <div className='input_area'>
                <label>Day</label>
                <select ref={dayRef}>
                    {days.map((day)=>(
                        <option key={day.id} value={day.day}>
                            {day.day}
                        </option>
                    ))}
                </select>
            </div>
            <button>save</button>
        </form>
    );
}