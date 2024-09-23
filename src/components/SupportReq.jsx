import React, { useState, useEffect } from 'react';
import './SupportReq.css';

function SupportReq() {
  const [questions, setQuestions] = useState([]);
  const [newQuestion, setNewQuestion] = useState('');
  const [newAnswer, setNewAnswer] = useState('');
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  // Funzione per ottenere le domande dal backend
  const fetchQuestions = async () => {
    const response = await fetch('http://localhost/react/getData.php');
    const data = await response.json();
    setQuestions(data);
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  // Funzione per inviare una nuova domanda
  const submitQuestion = async () => {
    if (newQuestion) {
      await fetch('http://localhost/react/postData.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ question: newQuestion }),
      });
      setNewQuestion('');
      fetchQuestions();
    }
  };

  // Funzione per inviare una nuova risposta
  const submitAnswer = async () => {
    if (newAnswer && selectedQuestion) {
      await fetch('http://localhost/react/postData.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ question_id: selectedQuestion, answer: newAnswer }),
      });
      setNewAnswer('');
      fetchQuestions();
    }
  };

  return (
    <>
        <div className="supp">
        <h2>Hai bisogno di aiuto o supporto? Puoi fare qui le tue domande, la community ti aiuterà</h2>

        {/* Sezione per inviare una nuova domanda */}
        <div>
            <input
            type="text"
            value={newQuestion}
            onChange={(e) => setNewQuestion(e.target.value)}
            placeholder="Fai una domanda..."
            />
            <button className='btn' onClick={submitQuestion}>Invia Domanda</button>
        </div>

        {/* Elenco delle domande */}
        <h2>Domande:</h2>
        <ul>
            {questions.map((question) => (
            <li key={question.id}>
                <strong>{question.question_text}</strong>
                <ul>
                {question.answers.map((answer, index) =>
                    answer ? <li key={index}>{answer}</li> : <li key={index}>Nessuna risposta</li>
                )}
                </ul>

                {/* Seleziona domanda per inviare una risposta */}
                <button className='btn' onClick={() => setSelectedQuestion(question.id)}>
                Rispondi
                </button>

                {/* Sezione per inviare una risposta */}
                {selectedQuestion === question.id && (
                <div>
                    <input
                    type="text"
                    value={newAnswer}
                    onChange={(e) => setNewAnswer(e.target.value)}
                    placeholder="Scrivi una risposta..."
                    />
                    <button className='btn' onClick={submitAnswer}>Invia Risposta</button>
                </div>
                )}
            </li>
            ))}
        </ul>
        </div>
    </>
  );
}

export default SupportReq;