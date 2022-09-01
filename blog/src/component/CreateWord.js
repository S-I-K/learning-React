import { useRef } from 'react';
import { useHistory } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

export default function CreateWord(){
    /* Custom Hooks */
    const days = useFetch('http://localhost:3002/days/');
    /* useRef(Object) => DOM handling(scroll, focus, ...) */
    const engRef = useRef(null);
    const korRef = useRef(null);
    const dayRef = useRef(null);
    /* useHistory() => move to url */
    const history = useHistory();

    /** submit => input value get */
    function onSubmit(e){
        e.preventDefault();
        fetch('http://localhost:3002/words/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                day: dayRef.current.value,
                eng: engRef.current.value,
                kor: korRef.current.value,
                isDone: false,
            }),
        })
        .then(res=>{
            if(res.ok){
                alert('create word add success !');
                history.push(`/day/${dayRef.current.value}`);
            }
        })
    }




    return(
        <form onSubmit={onSubmit}>
            <div className='input_area'>
                <label>Eng</label>
                <input type='text' placeholder='ex) life line' ref={engRef}/>
            </div>

            <div className='input_area'>
                <label>Kor</label>
                <input type='text' placeholder='ex) 생 선' ref={korRef}/>
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