import { useState } from 'react';

export default function Word(props){
    const [isShow, setIsShow] = useState(false);
    const [isDone, setIsDone] = useState(props.word.isDone);

    function toggleShow(){
        setIsShow(!isShow);
    }
    function toggleDone(){
        setIsDone(!isDone);
    }
    
    return(
        <tr className={isDone ? 'off' : ''}>
            <td>
                <input type='checkbox' checked={isDone} onChange={ toggleDone } />
            </td>
            <td>
                {props.word.eng}
            </td>
            <td>
                {isShow && props.word.kor}
            </td>
            <td>
                <button onClick={ toggleShow }> 뜻 { isShow ? '숨기기':'보기' } </button>
                <button className='btn_del'>삭제</button>
            </td>
        </tr>
    );
}