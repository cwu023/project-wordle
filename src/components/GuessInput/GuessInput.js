import React from 'react';

function GuessInput({onGuessesResult, gameStatus}) {
  const [input, setInput] = React.useState("");

  function handleInputChange(e) {
    const inputValue = e.target.value.toUpperCase();

    setInput(inputValue);
  }

  function handleFormSubmit(e) {
    e.preventDefault();

    onGuessesResult(input);
    setInput("");
  }

  return (
    <form onSubmit={handleFormSubmit} className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter guess:</label>
      <input 
        required
        disabled={gameStatus !== 'running'}
        id="guess-input" 
        name="guess-input" 
        type="text" 
        minLength={5}
        maxLength={5}
        value={input} 
        onChange={handleInputChange} />
    </form>
  );
}

export default GuessInput;
