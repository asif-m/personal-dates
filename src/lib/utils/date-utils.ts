import type { TReminder } from './reminders';
import type { TPersonalEvent } from './personal-events';

export const enum MONTH {
	JAN = 0,
	FEB = 1,
	MAR = 2,
	APR = 3,
	MAY = 4,
	JUN = 5,
	JUL = 6,
	AUG = 7,
	SEP = 8,
	OCT = 9,
	NOV = 10,
	DEC = 11
}

export class DateUtils {
	public static calculateReminder(
		event: TPersonalEvent,
		reminder: TReminder
	): { date: Date; year: number; month: number; day: number; tick: number } {
		const date = event.date;
		const calculatedDate = new Date(date);
		const weekAndDays = reminder.days + 7 * reminder.weeks;
		if (reminder.years) {
			calculatedDate.setFullYear(date.getFullYear() + reminder.years);
		}
		if (reminder.months) {
			calculatedDate.setMonth(date.getMonth() + reminder.months);
		}
		if (weekAndDays) {
			calculatedDate.setDate(date.getDate() + weekAndDays);
		}
		if (reminder.hours) {
			calculatedDate.setHours(date.getHours() + reminder.hours);
		}
		if (reminder.minutes) {
			calculatedDate.setMinutes(date.getMinutes() + reminder.minutes);
		}
		if (reminder.seconds) {
			calculatedDate.setSeconds(date.getSeconds() + reminder.seconds);
		}
		return {
			date: calculatedDate,
			tick: calculatedDate.getTime(),
			year: calculatedDate.getFullYear(),
			month: calculatedDate.getMonth(),
			day: calculatedDate.getDate()
		};
	}
	public static getMonthString(month: number): string {
		switch (month) {
			case MONTH.JAN:
				return 'JAN';
			case MONTH.FEB:
				return 'FEB';
			case MONTH.MAR:
				return 'MAR';
			case MONTH.APR:
				return 'APR';
			case MONTH.MAY:
				return 'MAY';
			case MONTH.JUN:
				return 'JUN';
			case MONTH.JUL:
				return 'JUL';
			case MONTH.AUG:
				return 'AUG';
			case MONTH.SEP:
				return 'SEP';
			case MONTH.OCT:
				return 'OCT';
			case MONTH.NOV:
				return 'NOV';
			case MONTH.DEC:
				return 'DEC';
			default:
				return '';
		}
	}
	public static getDifferenceBetweenTwoDates(dateTo: Date, dateFrom: Date) {
		const n = dateTo.getTime() - dateFrom.getTime();
		const msInSeconds = 1000;
		const msInMinute = 60000; // 1000 * 60;
		const msInHour = 3600000; // 1000 * 60 * 60;
		const msInDay = 86400000; // 1000 * 60 * 60 * 24;
		const msInWeek = 604800000; // 1000 * 60 * 60 * 24 * 7;
		const msInMonth = 2629746000; // 1000 * 60 * 60 * 24 * 146097.0 / 4800;
		const msInYear = 31556952000; // 1000 * 60 * 60 * 24 * 146097.0 / 400;
		const mSeconds = n < 0 ? Math.floor(n) : Math.ceil(n);

		const d = {
			seconds: Math.floor(mSeconds / msInSeconds),
			minutes: Math.floor(mSeconds / msInMinute),
			hours: Math.floor(mSeconds / msInHour),
			days: Math.floor(mSeconds / msInDay),
			weeks: Math.floor(mSeconds / msInWeek),
			months: Math.floor(mSeconds / msInMonth),
			years: Math.floor(mSeconds / msInYear)
		};
		return d;
	}
}
