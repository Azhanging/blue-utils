declare type TDateArg = string | number | Date;
interface TResultDate {
    year: string;
    month: string;
    day: string;
    hours: string;
    minutes: string;
    seconds: string;
    time: number;
}
declare const time: {
    formatDate(date: TDateArg, format: string): string;
    getDate(date: TDateArg): TResultDate;
    getYear(time: TDateArg): number;
    getMonth(time: TDateArg): number;
    getDay(time: TDateArg): number;
    getHours(time: TDateArg): number;
    getMinutes(time: TDateArg): number;
    getSeconds(time: TDateArg): number;
    getTime(time: TDateArg): number;
};
export default time;
