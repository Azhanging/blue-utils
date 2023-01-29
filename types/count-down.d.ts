declare type HookKeys = {
    start: `start`;
    end: `end`;
    tick: `tick`;
};
/**
 * 倒计时钩子
 */
declare type CountDownHooks = Partial<Record<keyof HookKeys, Function>>;
/**
 * 倒计时处理
 */
export declare class CountDown {
    options: any;
    readonly delay: number;
    private timer;
    countDownTime: number;
    constructor(opts?: {
        hooks: CountDownHooks;
    });
    start(countDownTime: number): void;
    _tick(delay?: number): void;
    stop(): void;
    reset(): void;
    resetTimeout(): void;
    /**
     * 执行制定的hook处理
     * @param type
     * @returns
     */
    _hook(type: keyof HookKeys): any;
    _hookStart(): any;
    _hookEnd(): void;
    _hookTick(): any;
    genViewDate(diffTime?: number): {
        day: string;
        hours: string;
        minutes: string;
        second: string;
    };
}
export {};
