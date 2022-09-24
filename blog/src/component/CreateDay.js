import { useHistory } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

export default function CreateDay(){
<<<<<<< HEAD
    const days = useFetch('http://localhost:3002/days');
    const history = useHistory();

    function addDay(e){
        e.preventDefault();
        // console.log(engRef.current.value);
        // console.log(korRef.current.value);
        // console.log(dayRef.current.value);

        fetch(`http://localhost:3002/days/`, {
            //method type
            method: 'POST',

            //content type
            headers: {
                'Content-Type' : 'application/json'
            },

            //수정될 혹은 추가될 내용
            body: JSON.stringify({
                day: days.length+1,
            }),
        })
        .then(res => {
            if(res.ok){
                alert('day create success !');
                history.push('/'); //localhost:3002/day/${dayRef.current.value}
            }
        });
=======
    const days = useFetch('http://localhost:3002/days/');
    const history = useHistory();


    function addDay(){
        fetch('http://localhost:3002/days', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                day: days.length+1
            }),
        })
        .then(res=>{
            if(res.ok){
                alert('create day add success !');
                history.push('/');
            }
        })
>>>>>>> d39d72ebbba4e0547a0a20c75baa06fed4b90209
    }


    return(
        <div>
<<<<<<< HEAD
            <h3>현재 일수: {days.length}일 </h3>
            <button onClick={addDay}>Day Add</button>
=======
            <h3>현재 일수: {days.length}일</h3>
            <button onClick={addDay}>DAY ADD</button>
>>>>>>> d39d72ebbba4e0547a0a20c75baa06fed4b90209
        </div>
    );
}