import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import {NUM_OF_GUESSES_ALLOWED} from '../../constants';
import GuessInput from '../GuessInput';
import GuessResult from '../GuessResult';
import WonBanner from '../WonBanner';
import LostBanner from '../LostBanner';


// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState('running');

  function handleGuessesResult(input) {
    const nextGuesses = [...guesses, input];
    setGuesses(nextGuesses);

    if (input === answer) {
      setGameStatus('won');
    } else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus('lost');
    }
  }

  return (
    <>
      <h4 className="hint">Check the console to see the answer.</h4>
      <GuessResult guesses={guesses} answer={answer} />
      <GuessInput onGuessesResult={handleGuessesResult} gameStatus={gameStatus} />
      {gameStatus === 'won' && <WonBanner numOfGuesses={guesses.length} />}
      {gameStatus === 'lost' && <LostBanner answer={answer} />}
    </>
  ); 
}

export default Game;
