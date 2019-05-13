import React from 'react';
import ValueInput from './ValueInput';

/**
 * インチセンチ変換コンポーネント
 */
export default class InchToCm extends React.Component {
  /**
   * コンストラクタ
   * @param {*} props props
   */
  constructor(props) {
    super(props);
    this.state = {
      inch: '',
      cm: '',
    };
  }

  /**
   * インチが変更されたとき
   * @param {*} e ターゲット
   */
  inchChange(e) {
    const inchValue = e.value;
    const cmValue = inchValue * 2.54;
    this.setState({
      inch: inchValue,
      cm: cmValue,
    });
  }

  /**
   * センチが変更されたとき
   * @param {*} e ターゲット
   */
  cmChange(e) {
    const cmValue = e.value;
    const inchValue = cmValue * 2.54;
    this.setState({
      inch: inchValue,
      cm: cmValue,
    });
  }

  /**
   * render
   * @return {*} ここなんて書くのが正解なの？
   */
  render() {
    return (
      <div>
        <ValueInput
          title="inch"
          onChange={(e) => this.inchChange(e)}
          value={this.state.inch}/>
        <ValueInput
          title="cm"
          onChange={(e) => this.cmChange(e)}
          value={this.state.cm}/>
      </div>
    );
  }
}
