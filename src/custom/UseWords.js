import {useState, useRef, useEffect} from 'react';

export function UseWords(DEFAULT_TIME = 5) {
    const [text, setText] = useState('');
    const [timeRemaining, setTimeRemaining] = useState(DEFAULT_TIME)
    const [isClicking, setIsClicking] = useState(false)
    const [totalWords, setTotalWords] = useState(0)
    const ref = useRef(null)

    function handleChange(e) {
        const { value } = e.target
        setText(value)
    }

    function calcTotalWords(str) {
        const wordsArr = str.trim().split(' ');
        const filteredWordsArr = wordsArr.filter(word => word !== '')
        return filteredWordsArr.length
    }

    function startGame() {
        setIsClicking(true)
        setText('')
        setTotalWords(0)
    }

    function endGame() {
        setTimeRemaining(DEFAULT_TIME)
        setIsClicking(false)
        setTotalWords(calcTotalWords(text))
    }

    useEffect(() => {
        if(isClicking && timeRemaining > 0) {
        ref.current.focus()
        setTimeout(() => {
            setTimeRemaining(time => time - 1)
        }, 1000)
        } else if(timeRemaining === 0) {
        endGame()
        }
    }, [timeRemaining, isClicking])

    return [ref, isClicking, text, handleChange, timeRemaining, totalWords, startGame]
}
