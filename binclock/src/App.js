import React from 'react';
import ReactDOM from 'react-dom';

const zero2 = (v) => {
  v = String('00' + v);
  return v.substr(v.length - 2, 2);
};

const update = () => {
  const now = new Date();
  const hh = zero2(now.getHours());
  const mm = zero2(now.getMinutes());
  const ss = zero2(now.getSeconds());
  const binStr = hh + mm + ss;
  const style0 = {
    color: 'brown',
  };
  const style1 = {
    color: 'red',
  };
  const lines = [];

  for (let i = 0; i < binStr.length; i++) {
    const v = parseInt(binStr.substr(i, 1));
    // １桁ずつ２進数にする
    const bin = '0000' + v.toString(2);
    // 後ろの４桁とってくる
    const bin8 = bin.substr(bin.length - 4, 4);

    for (let j = 0; j < bin8.length; j++) {
      if (bin8.substr(j, 1) === '0') {
        lines.push(<span style={style0}>○</span>);
      } else {
        lines.push(<span style={style0}>●</span>);
      }
    }
    lines.push(<br />);
  }

  ReactDOM.render(<div>{lines}</div>, document.getElementById('root'));
};

setInterval(update, 1000);
