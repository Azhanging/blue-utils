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
    /**
     * 开始执行倒计时
     *  */
    start(countDownTime: number): void;
    /**
     * 每阶段的处理
     *  */
    _tick(delay?: number): void;
    /**
     * 停止处理
     *  */
    stop(): void;
    /**
     * 重置处理
     *  */
    reset(): void;
    /**
     * 清除定时处理
     *  */
    resetTimeout(): void;
    /**
     * 执行制定的hook处理
     * @param type
     * @returns
     */
    _hook(type: keyof HookKeys): any;
    /**
     * start钩子处理
     *  */
    _hookStart(): any;
    /**
     * end钩子处理
     *  */
    _hookEnd(): void;
    /**
     * tick钩子处理
     *  */
    _hookTick(): any;
    /**
     * 生成倒计时显示
     *  */
    genViewDate(diffTime?: number): {
        /**
         * 开始执行倒计时
         *  */
        day: string;
        hours: string;
        minutes: string;
        second: string;
    };
}
export {};
