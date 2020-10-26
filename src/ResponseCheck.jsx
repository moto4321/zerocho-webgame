import React, {useState, useRef} from "react";

const ResponseCheck = () => {
    const [state, setState] = useState('waiting');
    const [message, setMessage] = useState('클릭해서 시작하세요.');
    const [result, setResult] = useState([]);
    const timeout = useRef(null);
    const startTime = useRef();
    const endTime = useRef();
    {/*setTimeout 방식을 잘 봐둬라 */}

    const onClickScreen = () => {
        if(state === 'waiting') {
            setState('ready');
            setMessage('초록색이 되면 클릭하세요.');
            timeout.current = setTimeout(() => {
                setState('now');
                setMessage('지금 클릭!');
                startTime.current = new Date();
            }, Math.floor(Math.random() * 1000) + 2000);
        } else if(state === 'ready') {
            clearTimeout(this.timeout);
            setMessage('성급하시군요!');
            setState('waiting');
        } else if(state === 'now') {
            endTime.current = new Date();
            setState('waiting');
            setMessage('클릭해서 시작하세요.');
            {/*setResult((prevResult) => [...prevResult, endTime - startTime]);*/}
            setResult((prevResult) => {
                return [...prevResult, endTime.current - startTime.current]; 
            });
        }
    }


    const onClickReset = () => {
        setResult([]);
    }

    const renderAverage = () => {
        return(
            result.length === 0
            ? null
            : <div>
                <div>평균시간: {result.reduce((a, c) => a + c)}</div>
                <button onClick={onClickReset}>리셋</button>
            </div>
        )
    }


    return(
        <div>
            <div id="screen" onClick={onClickScreen} className={state} >
                {message}
            </div>
            {renderAverage()}
        </div>
    )
}

export default ResponseCheck;