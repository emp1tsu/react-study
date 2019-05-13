import React from 'react';

/**
 * 数値を入力するコンポーネント
 */
export default class ValueInput extends React.Component {
  /**
   * コンストラクタ
   * @param {*} props props
   */
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value,
    };
  }

  /**
   * 値が変更されたとき
   * @param {*} e ターゲット
   */
  handleChange(e) {
    const value = e.target.value;
    const newValue = value.replace(/[^0-9.]+/g, '');
    this.setState({value: newValue});
    if (this.props.onChange) {
      this.props.onChange({
        target: this,
        value: newValue,
      });
    }
  }

  /**
   * コンポーネントが受け取るpropsが変化した場合に呼び出される
   * このメソッド内でsetStateでStateを変更すると描画時には変更されたstateで描画される
   * @param {*} nextProps props
   */
  componentWillReceiveProps(nextProps) {
    this.setState({value: nextProps.value});
  }

  /**
   * render
   * @return {*} koko dou kakeba iino ?
   */
  render() {
    return (
      <div>
        <label>{this.props.title}</label>
        <input
          type="text"
          value={this.state.value}
          onChange={(e) => this.handleChange(e)}/>
      </div>
    );
  }

}
