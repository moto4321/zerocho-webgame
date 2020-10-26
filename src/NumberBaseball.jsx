import React, {useState, useRef} from "react";
import Try from "./Try";

function getNumbers() {
    const candidate = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const array = [];
    for(let i = 0; i < 4; i++) {
        // const chosen = candidate.splice(Math.floor(Math.random() * i), 1)[0];
        const chosen = candidate.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
        array.push(chosen);
    }
    return array;
}

function NumberBaseball () {
    const [value, setValue] = useState('');
    const [result, setResult] = useState('');
    const [answer, setAnswer] = useState(getNumbers());
    const [tries, setTries] = useState([]);
    const onRefInput = useRef();


    const onSubmit = (e) => {
        e.preventDefault();
        if(value === answer.join('')) {

            setResult('홈런!');
            setTries((prevTries) => [...prevTries, {try: value, result: '홈런!'}])
            alert('게임을 다시 시작합니다.');
            setValue('');
            setAnswer(getNumbers());
            setTries([]);
            onRefInput.current.focus();
        } else {
            const answerArray = value.split('').map(v => parseInt(v));
            let strike = 0;
            let ball = 0;
            if(tries.length >= 9) {

                setResult(`10번 넘게 틀려서 실패 ${answer.join(',')} 였습니다`)
                alert('게임을 다시 시작합니다.');
                setValue('');
                setAnswer(getNumbers());
                setTries([]);
                onRefInput.current.focus();
            } else {
                for(let i = 0; i < 4; i++) {
                    if(answerArray[i] === answer[i]) {
                        strike += 1;
                    } else if (answer.includes(answerArray[i])) {
                        ball += 1;
                    }
                }
                setTries((prevTries) => [...prevTries, {try: value, result: `${strike} 스트라이크, ${ball} 볼`}])
                setValue('');
                onRefInput.current.focus();
            }
        }
    }

    const onChange = (e) => {
        setValue(e.target.value);
    }

    return(
        <div>
            <div>{result}</div>
            <form onSubmit={onSubmit}>
                <input
                maxLength={4} 
                onChange={onChange} 
                value={value} 
                ref={onRefInput}></input>
                <button>입력!</button>
            </form>
            <div> 시도: {tries.length}</div>
            <ul>
                {tries.map((v, i) => (
                    <Try key={`${i + 1} 차 시도`} tryInfo={v} index={i} />
                ) )}
            </ul>
        </div>
    )

}

export default NumberBaseball;