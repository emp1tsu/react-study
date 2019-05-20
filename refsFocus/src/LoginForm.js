import React from 'react';

/**
 * ログインフォームコンポーネント
 */
export default class LoginForm extends React.Component {
  /**
   * コンストラクタ
   * @param {*} props props
   */
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      password: '',
    };
  }

  /**
   * ログインフォームを描画
   * @return {*} ログインフォーム
   */
  render() {
    const doSubmit = (e) => this.doSubmit(e);
    const doChange = (e) => this.doChange(e);

    return (
      <form onSubmit={doSubmit}>
        <label>ユーザ名：
          <input
            type="text"
            name="user"
            id="user"
            ref={(i) => {
              this.user = i;
            }}
            value={this.state.user}
            onChange={doChange}/>
        </label>
        <label>パスワード：
          <input
            type="password"
            name="password"
            id="password"
            ref={(i) => {
              this.password = i;
            }}
            value={this.state.password}
            onChange={doChange}/>
        </label>
        <input type="submit" value="送信"/>
      </form>
    );
  }

  /**
   * 文字を変更したとき
   * @param {*} e イベント
   */
  doChange(e) {
    const key = e.target.name;
    this.setState({
      [key]: e.target.value,
    });
  }

  /**
   * 送信ボタン押したとき
   * @param {*} e イベント
   */
  doSubmit(e) {
    e.preventDefault();
    if (!this.state.user) {
      this.user.focus();
      return;
    } else if (!this.state.password) {
      this.password.focus();
      return;
    }
    window.alert(JSON.stringify(this.state));
  }
}
