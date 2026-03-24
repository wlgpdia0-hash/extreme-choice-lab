import { useState } from 'react'
import { questions, getResult } from '@/entities/question/questions'
import Button from '@/shared/ui/Button'

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [showResult, setShowResult] = useState(false)

  const handleAnswer = (optionScore) => {
    setScore(score + optionScore)
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setShowResult(true)
    }
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setScore(0)
    setShowResult(false)
  }

  if (showResult) {
    return (
      <div>
        <h2>결과</h2>
        <p>{getResult(score)}</p>
        <p>총 점수: {score}/10</p>
        <Button onClick={resetQuiz}>다시하기</Button>
      </div>
    )
  }

  const question = questions[currentQuestion]

  return (
    <div>
      <h1>극한 선택 연구소</h1>
      <h2>질문 {currentQuestion + 1} / {questions.length}</h2>
      <p>{question.question}</p>
      {question.options.map((option, index) => (
        <Button key={index} onClick={() => handleAnswer(option.score)}>
          {option.text}
        </Button>
      ))}
    </div>
  )
}

export default Quiz