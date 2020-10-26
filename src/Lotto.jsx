import React, {useState, useEffect, useRef, useMemo, useCallback} from 'react';
import Ball from './Ball';

function getWinNumbers() {
    console.log('getWinNumbers');
    const candidate = Array(45).fill().map((v, i) => i + 1);
    const shuffle = [];
    while(candidate.length > 0) {
        shuffle.push(candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0]);
    }
    const bonusNumber = shuffle[shuffle.length - 1];
    const winNumbers = shuffle.slice(0, 6).sort((p, c) => p - c);
    return [...winNumbers, bonusNumber];
}

const Lotto = () => {
    const lottoNumbers = useMemo(() => getWinNumbers(), []); // 두번쨰 인자(배열)가 바뀌지 않는 한 getWinNumbers는 다시 실행되지 않음
    const [winNumbers, setWinNumbers] = useState(lottoNumbers);
    const [bonus, setBonus] = useState(null);
    const [redo, setRedo] = useState(false);
    const [winBalls, setWinBalls] = useState([]);
    const timeouts = useRef([]);

    useEffect(() => {
        for (let i = 0; i < winNumbers.length - 1; i++) {
            timeouts.current[i] = setTimeout(() => { // 이 부분은 timeouts.current가 바뀌는게 아니다.
                setWinBalls((prevBalls) => [...prevBalls, winNumbers[i]]);
            }, (i + 1) * 1000);
        }
        timeouts.current[6] = setTimeout(() => {
            setBonus(winNumbers[6]);
            setRedo(true);
        }, 7000);
        return () => {// 여기가 componentWillUnmount 자리
            timeouts.current.forEach((v) => {
                clearTimeout(v);
            })
        };
    }, [timeouts.current]); // 여기가 빈배열이면 componentDidMount와 동일.
    // 배열에 요소가 있으면 componentDidMount와 componentDidUpdate 둘 다 수행.

    const onClickRedo = () => {
        setWinNumbers(getWinNumbers());
        setWinBalls([]);
        setBonus(null);
        setRedo(false);
        timeouts.current = []; // 얘는 timeouts.current가 바뀌는 거다.
    }

    return(
        <>
            <div>당첨 숫자</div>
            <div id="결과창">
                {winBalls.map((v) => <Ball key={v} number={v} />)}
            </div>
            <div>보너스!</div>
            {bonus && <Ball number={bonus} />}
            {redo && <button onClick={onClickRedo}>한 번 더!</button>}
        </>
    )
}

export default Lotto;

// const onClickRedo = useCallback(() => {
//     setWinNumbers(getWinNumbers());
//     setWinBalls([]);
//     setBonus(null);
//     setRedo(false);
//     timeouts.current = []; // 얘는 timeouts.current가 바뀌는 거다.
// }, [winNumbers]);

// 이런식으로 useCallBack 함수 사용
// useCallback은 winNumbers가 바뀌기 전까지 함수를 기억함!!
// 두번째 인자(배열)가 바뀌면 앞에게 다시 실행된다!!! useMemo, useCallback