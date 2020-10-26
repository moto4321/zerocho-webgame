// import React from "react";

// const Gugudan = () => {
//     const [first, setFirst] = React.useState(Math.ceil(Math.random() * 9));
//     const [second, setSecond] = React.useState(Math.ceil(Math.random() * 9));
//     const [value, setValue] = React.useState('');
//     const [result, setResult] = React.useState('');
//     const inputRef = React.useRef(); // 괄호안에 기본값 넣어도 됨 null 같은..

//     const onSubmitForm = (e) => {
//         e.preventDefault();
//         if(parseInt(value) === first * second) {
//             setResult((prevResult) => {
//                 return '정답: ' + value
//             });
//             setFirst(Math.ceil(Math.random() * 9));
//             setSecond(Math.ceil(Math.random() * 9));
//             setValue('');
//             inputRef.current.focus(); // 이거는 class 방식이랑 많이 다르니 둘다 외워라.
//         } else {
//             setValue('');
//             setResult('땡!');
//             inputRef.current.focus();
//         }
//     }

//     const onChangeInput = (e) => {
//         setValue(e.target.value);
//     };

//     return(
//     <div>
//         <div>{first} 곱하기 {second}</div>
//         <form onSubmit={onSubmitForm}>
//             <input ref={inputRef} onChange={onChangeInput} value={value}></input>
//             <button>입력!</button>
//         </form>
//         <div>{result}</div>
//     </div>
//     )
// }

// export default Gugudan;

import React from "react";

function Gugudan () {
    const [value, setValue] = React.useState('');
    const [result, setResult] = React.useState('');
    const [first, setFirst] = React.useState(Math.ceil(Math.random() * 9));
    const [second, setSecond] = React.useState(Math.ceil(Math.random() * 9));
    const onRefInput = React.useRef();


    const onSubmitForm = (e) => {
        e.preventDefault();
        if(parseInt(value) === first * second) {
            setValue('');
            setResult('정답!');
            setFirst(Math.ceil(Math.random() * 9));
            setSecond(Math.ceil(Math.random() * 9));
           onRefInput.current.focus();
        } else {
            setResult('땡!');
            setValue('');
            onRefInput.current.focus();
        }
    }

    const onChangeInput = (e) => {
        setValue(e.target.value);
    }

    return(
        <div>
            <div>{first} 곱하기 {second}</div>
            <form onSubmit={onSubmitForm}>
                <input onChange={onChangeInput} value={value} ref={onRefInput}></input>
                <button>입력!</button>
            </form>
            <div>{result}</div>
        </div>
    )

}

export default Gugudan;