import { useHistory } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

export default function CreateDay(){
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
    }


    return(
        <div>
            <h3>현재 일수: {days.length}일</h3>
            <button onClick={addDay}>DAY ADD</button>
        </div>
    );
}