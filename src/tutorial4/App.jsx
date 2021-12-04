import React from 'react';
import EmptyBlock from './components/EmptyBlock';
import Phrase from './components/Phrase';
import { useState } from 'react';

const adjectivesArr = [
  'абсолютный',
  'адский',
  'азартный',
  'активный',
  'ангельский',
  'астрономический',
  'баснословный',
  'безбожный',
  'безбрежный',
  'безвозвратный',
  'безграничный',
  'бездонный',
  'бездушный',
  'безжалостный',
  'замечательно',
  'замечательный',
  'записной',
  'запредельный',
  'заядлый',
  'звериный',
  'зверский',
  'зеленый',
  'злой',
  'злостный',
  'значительный',
  'неоспоримый',
  'неотразимый',
  'неоценимый',
  'непередаваемый',
];
const nounsArr = [
  'лгун',
  'день',
  'конь',
  'олень',
  'человек',
  'программист',
  'ребёнок',
  'конец',
  'город',
  'дурак',
];
const App = () => {
  const [randomPhrase, setRandomPhrase] = useState([]);
  const onClearPhrase = () => {
    setRandomPhrase([]);
  };
  const onGenerateHandler = () => {
    const randomAdjective =
      adjectivesArr[Math.floor(Math.random() * adjectivesArr.length)];
    const randomNoun = nounsArr[Math.floor(Math.random() * nounsArr.length)];
    setRandomPhrase((prevState) => [
      ...prevState,
      `${randomAdjective} ${randomNoun}`,
    ]);
  };
  return (
    <div className='wrapper'>
      {randomPhrase.length ? (
        <Phrase randomPhrase={randomPhrase} />
      ) : (
        <EmptyBlock />
      )}

      <button className='btn btn_generate' onClick={onGenerateHandler}>
        Сгенерировать
      </button>
      <button className='btn btn_clear' onClick={onClearPhrase}>
        Очистить
      </button>
    </div>
  );
};

export default App;
