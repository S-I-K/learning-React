import { useRef } from 'react';
import { useHistory } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

export default function CreateWord(){
<<<<<<< HEAD


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
=======
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
>>>>>>> d39d72ebbba4e0547a0a20c75baa06fed4b90209
            body: JSON.stringify({
                day: dayRef.current.value,
                eng: engRef.current.value,
                kor: korRef.current.value,
<<<<<<< HEAD
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


=======
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




>>>>>>> d39d72ebbba4e0547a0a20c75baa06fed4b90209
    return(
        <form onSubmit={onSubmit}>
            <div className='input_area'>
                <label>Eng</label>
<<<<<<< HEAD
                <input type='text' placeholder='life line' ref={engRef}/>
=======
                <input type='text' placeholder='ex) life line' ref={engRef}/>
>>>>>>> d39d72ebbba4e0547a0a20c75baa06fed4b90209
            </div>

            <div className='input_area'>
                <label>Kor</label>
<<<<<<< HEAD
                <input type='text' placeholder='생선' ref={korRef}/>
=======
                <input type='text' placeholder='ex) 생 선' ref={korRef}/>
>>>>>>> d39d72ebbba4e0547a0a20c75baa06fed4b90209
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