import { useState, useEffect } from 'react';
import questions from './app/entities/question/questions.js';
import './App.css';

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [choices, setChoices] = useState({ A: 0, B: 0 });
  const [showResult, setShowResult] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const petals = [];
    for (let i = 0; i < 15; i++) {
      const petal = document.createElement('span');
      petal.className = 'falling-petal';
      petal.textContent = ['🌸', '🍃', '🌼', '🌺'][Math.floor(Math.random() * 4)];
      petal.style.left = Math.random() * 100 + 'vw';
      petal.style.animationDelay = Math.random() * 10 + 's';
      petal.style.animationDuration = (Math.random() * 10 + 10) + 's';
      document.body.appendChild(petal);
      petals.push(petal);
    }
    return () => {
      petals.forEach(petal => document.body.removeChild(petal));
    };
  }, []);

  const handleChoice = (choice) => {
    setChoices(prev => ({ ...prev, [choice]: prev[choice] + 1 }));
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setChoices({ A: 0, B: 0 });
    setShowResult(false);
  };

  const result = choices.A > choices.B ? '감각파 🔥' : '현실파 🧊';

  return (
    <div className="app">
      <div className="cursor-character" style={{ left: mousePos.x + 10, top: mousePos.y + 10 }}>
        🐱
      </div>
      {!showResult ? (
        <div className="quiz">
          <h1>극한 선택 연구소</h1>
          <p>당신의 선택으로 성격을 분석하는 밸런스 게임</p>
          <div className="progress">
            {currentQuestionIndex + 1} / {questions.length}
          </div>
          <div className="question">
            <h2>{questions[currentQuestionIndex].a} vs {questions[currentQuestionIndex].b}</h2>
          </div>
          <div className="buttons">
            <button onClick={() => handleChoice('A')}>{questions[currentQuestionIndex].a}</button>
            <button onClick={() => handleChoice('B')}>{questions[currentQuestionIndex].b}</button>
          </div>
        </div>
      ) : (
        <div className="result">
          <h1>결과</h1>
          <p>당신은 <strong>{result}</strong> 입니다!</p>
          <p>A 선택: {choices.A}, B 선택: {choices.B}</p>
          <button onClick={resetQuiz}>다시하기</button>
        </div>
      )}
    </div>
  );
}

export default App;
