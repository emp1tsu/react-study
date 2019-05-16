import React from 'react';

/**
 * カラーコンポーネント
 */
export default class ColorBox extends React.Component {
  /**
   * コンストラクタ
   * @param {*} props props
   */
  constructor(props) {
    super(props);
    this.state = {
      index: -1,
      colorName: '',
      colors: ['red', 'blue', 'green', 'yellow', 'black'],
    };
  }

  /**
   * 描画
   * @return {*}
   */
  render() {
    const colors = this.state.colors;
    const index = this.state.index;
    // 選択中の色
    const currentColor = 0 <= index ? colors[index] : '';
    const items = colors.map((color) => {
      let frame = '1px solid white';
      if (color === currentColor) {
        frame = '1px solid black';
      }

      const colorStyle = {
        color: color,
        border: frame,
      };

      // 色をクリックしたときのイベント
      const clickHandler = (e) => {
        const c = e.target.style.color;
        const i = this.state.colors.indexOf(c);

        this.setState({index: i});

        if (this.props.onColorChange) this.props.onColorChange({color: c});
      };

      return (
        <span
          onClick={clickHandler}
          style={colorStyle}>■</span>
      );
    });

    return (
      <div>{items}</div>
    );
  }
}
