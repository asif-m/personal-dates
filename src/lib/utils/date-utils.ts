import type { TReminder } from './reminders';
import type { TPersonalEvent } from './personal-events';
import { MONTH } from './constants';

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
	public getMonthString(month: MONTH): string {
		switch (month) {
			case MONTH.JAN:
				return 'Jan';
			case MONTH.FEB:
				return 'Feb';
			case MONTH.MAR:
				return 'Mar';
			case MONTH.APR:
				return 'Apr';
			case MONTH.MAY:
				return 'May';
			case MONTH.JUN:
				return 'Jun';
			case MONTH.JUL:
				return 'Jul';
			case MONTH.AUG:
				return 'Aug';
			case MONTH.SEP:
				return 'Sep';
			case MONTH.OCT:
				return 'Oct';
			case MONTH.NOV:
				return 'Nov';
			case MONTH.DEC:
				return 'Dec';
			default:
				return '';
		}
	}
}
