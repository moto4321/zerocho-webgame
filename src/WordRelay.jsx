const React = require('react');
const {useState, useRef} = React;

const WordRelay = () => {
    const [word, setWord] = useState('기우석');
    const [value, setValue] = useState('');
    const [result, setResult] = useState('');
    const inputRef = useRef();


    const onSubmit = (e) => {
        e.preventDefault();
        if(word[word.length - 1] === value[0]) {
            setWord(value);
            setValue('');
            setResult('딩동댕');
            inputRef.current.focus();
        } else {
            setValue('');
            setResult('땡!');
            inputRef.current.focus();
        }

    }

    const onChange = (e) => {
        setValue(e.target.value);
    }


    return(
        <div>
            <div>{word}</div>
            <form onSubmit={onSubmit}>
                <input ref={inputRef} onChange={onChange} value={value} ></input>
                <button>입력!</button>
            </form>
            <div>{result}</div>
        </div>
    )
}

export default WordRelay;