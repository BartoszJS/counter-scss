import {useState} from 'react';

function App() {
  const [text, setText] = useState(0);

  return (
    <div className='counterDiv'>
      <h3>Counter</h3>
      {text} <br></br>
      <button className='btn btn--increase' onClick={() => setText(text+1)}>++</button>
      <button className='btn btn--zero' onClick={() => setText(0)}>0</button>
      <button className='btn btn--decrease' onClick={() => setText(text-1)}>--</button>
    </div>
   
  );
}

export default App;
