import React from 'react';

/**
 * ストップウォッチ
 */
class StopWatch extends React.Component {
  /**
   * コンストラクタ
   * @param {*} props props
   */
  constructor(props) {
    super(props);
    // 初期値
    this.state = {
      isLive: false,
      currentTime: 0,
      startTime: 0,
    };
    this.timerId = 0;
  }

  /**
   * マウントされる直前
   */
  componentWillMount() {
    this.timerId = setInterval(() => {
      this.tick();
    }, 1000);
  }

  /**
   * アンマウントされる直前
   */
  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  /**
   * 現在時刻を取得してState更新
   * 毎秒実行される
   */
  tick() {
    if (this.state.isLive) {
      const currentTime = new Date().getTime();
      this.setState({currentTime: currentTime});
    }
  }

  /**
   * 開始・停止ボタン押したときのクリックイベント
   * @param {*} e event
   */
  clickHandler(e) {
    // 停止するとき
    if (this.state.isLive) {
      this.setState({isLive: false});
    } else {
      // 開始するとき
      const currentTime = new Date().getTime();
      this.setState({
        isLive: true,
        currentTime: currentTime,
        startTime: currentTime,
      });
    }
  }

  /**
   * 時刻表示を返す
   * @return {*} 現在時刻
   */
  getDisplay() {
    const state = this.state;
    const delta = state.currentTime - state.startTime;
    const t = Math.floor(delta / 1000);
    const ss = t % 60;
    const m = Math.floor(t / 60);
    const mm = m % 60;
    const hh = Math.floor(mm / 60);

    const z = (num) => {
      const s = '00' + String(num);
      return s.substr(s.length - 2, 2);
    };

    return <span className="display">
      {z(hh)}:{z(mm)}:{z(ss)}
    </span>;
  }

  /**
   * render
   * @return {*} ストップウォッチ
   */
  render() {
    let label = 'start';
    if (this.state.isLive) {
      label = 'stop';
    }
    const disp = this.getDisplay();
    const click = (e) => this.clickHandler(e);
    return (
      <div className="stopWatch">
        <div>{disp}</div>
        <button onClick={click}>{label}</button>
      </div>
    );
  }
}

export default StopWatch;
