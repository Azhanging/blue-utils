//钩子命名
import { hook } from "./tools";
import { genCountDownViewDate } from "./time";

type HookKeys = {
  start: `start`;
  end: `end`;
  tick: `tick`;
};

/**
 * 倒计时钩子
 */
type CountDownHooks = Partial<Record<keyof HookKeys, Function>>;

/**
 * 倒计时处理
 */
export class CountDown {
  options: any;
  readonly delay: number = 1000;
  private timer: number = 0;
  countDownTime: number = 0;
  constructor(
    opts: {
      hooks: CountDownHooks;
    } = {
      hooks: {},
    }
  ) {
    this.options = opts;
  }
  //开始倒计时
  start(countDownTime: number) {
    this.countDownTime = countDownTime;
    this._hookStart();
    this._tick();
  }
  //每阶段的处理
  _tick(delay = this.delay) {
    const tick = (type = `tick`) => {
      if (this.countDownTime >= this.delay) {
        this.countDownTime -= this.delay;
      } else {
        this.countDownTime = 0;
      }
      if (type === `tick`) {
        //开始不进行递减处理
        this._hookTick();
        if (this.countDownTime < this.delay) {
          this._tick(this.countDownTime);
        } else {
          this._tick();
        }
      } else if (type === `end`) {
        this._hookEnd();
      }
    };
    if (this.countDownTime <= 0) {
      tick(`end`);
    } else {
      //@ts-ignore
      this.timer = setTimeout(() => {
        tick();
      }, delay);
    }
  }
  //停止处理
  stop() {
    this.resetTimeout();
  }
  //重置
  reset() {
    this.countDownTime = 0;
    this.resetTimeout();
  }
  //清除定时处理
  resetTimeout() {
    clearTimeout(this.timer);
    this.timer = 0;
  }
  /**
   * 执行制定的hook处理
   * @param type
   * @returns
   */
  _hook(type: keyof HookKeys) {
    const { hooks } = this.options;
    return hook(this, hooks[type]);
  }
  //递减处理
  _hookStart() {
    return this._hook(`start`);
  }
  //结束了
  _hookEnd() {
    this._hook(`end`);
    this.resetTimeout();
  }
  //递减处理
  _hookTick() {
    return this._hook(`tick`);
  }
  //生成倒计时显示
  genViewDate(diffTime = this.countDownTime) {
    return genCountDownViewDate(diffTime);
  }
}
