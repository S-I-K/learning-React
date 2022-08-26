import { Link } from 'react-router-dom';


export default function EmptyPage(){
    return(
        <>
        <h2>그딴 주소는 없습니다.</h2>
        <Link to='/'>돌아가</Link>
        </>
    );
}