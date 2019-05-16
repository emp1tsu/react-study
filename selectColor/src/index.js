import React from 'react';
import ReactDOM from 'react-dom';
import ColorBox from './ColorBox';

const colorHandler = (e) => {
  ReactDOM.render(
      <p>{e.color}</p>,
      document.getElementById('info')
  );
};

ReactDOM.render(
    <div>
      <ColorBox id="cb" onColorChange={colorHandler}/>
    </div>,
    document.getElementById('root')
);
