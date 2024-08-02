import React, { useState } from 'react';

import viteLogo from '/cube-of-numbers.png';
import './App.css';

function App() {
  const [min, setMin] = useState(1);
  const [max, setMax] = useState(100);
  const [quantity, setQuantity] = useState(10);
  const [allowDuplicates, setAllowDuplicates] = useState(false);
  const [sorted, setSorted] = useState(false);
  const [results, setResults] = useState([]);

  const generateRandomNumbers = () => {
    let numbers = [];
    while (numbers.length < quantity) {
      const num = Math.floor(Math.random() * (max - min + 1)) + min;
      if (allowDuplicates || !numbers.includes(num)) {
        numbers.push(num);
      }
    }
    if (sorted) {
      numbers.sort((a, b) => a - b);
    }
    setResults(numbers);
  };

  const onCopy = (text) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <React.Fragment>
      <div>
        <img src={viteLogo} className="logo" alt="рандомайзер" />
      </div>
      <h1>Генератор случайных чисел</h1>
      <div className="card">
        <h3>Сгенерируйте случайные числа в заданном диапазоне</h3>
        <div className="input-group">
          <div className="range">
            <label>
              от
              <input
                type="number"
                value={min}
                onChange={(e) => setMin(Number(e.target.value))}
              />
            </label>
            <label>
              до
              <input
                type="number"
                value={max}
                onChange={(e) => setMax(Number(e.target.value))}
              />
            </label>
          </div>

          <label>
            Количество чисел:
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
            />
          </label>
          <div className="checkboxes">
            <div className="checkbox">
              {' '}
              <label htmlFor="allowDuplicates">
                <input
                  type="checkbox"
                  id="allowDuplicates"
                  checked={allowDuplicates}
                  onChange={(e) => setAllowDuplicates(e.target.checked)}
                />
                <span className={`icon ${allowDuplicates ? 'checked' : ''}`} />
                Повторы
              </label>
            </div>
            <div className="checkbox">
              <label htmlFor="sorted">
                <input
                  type="checkbox"
                  id="sorted"
                  checked={sorted}
                  onChange={(e) => setSorted(e.target.checked)}
                />
                <span className={`icon ${sorted ? 'checked' : ''}`} />
                Сортировать
              </label>
            </div>
          </div>
        </div>
        <button onClick={generateRandomNumbers}>Сгенерировать числа</button>
      </div>

      {results.length !== 0 && (
        <div className="card result">
          <div className="results">
            <h3>Результат:</h3>
            <h2>{results.join(', ')}</h2>
          </div>
          <button onClick={onCopy(results.join(', '))}>Скопировать</button>
        </div>
      )}
    </React.Fragment>
  );
}

export default App;
