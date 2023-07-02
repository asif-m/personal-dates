import { DateUtils } from './date-utils';
import { PERSONAL_EVENTS, type TPersonalEvent } from './personal-events';
import { REMINDERS, type TReminder } from './reminders';

export type TEventDetail = {
	tick: number;
	date: Date;
	event: TPersonalEvent;
	reminder: TReminder;
};
export type TDailyEvents = {
	day: number;
	children: Array<TEventDetail>;
};

export type TMonthlyEvents = {
	month: number;
	children: Array<TDailyEvents>;
};

export type TYearlyEvents = {
	year: number;
	children: Array<TMonthlyEvents>;
};

const data: { [key in number]: { [key in number]: { [key in number]: Array<TEventDetail> } } } = {};
console.time();
PERSONAL_EVENTS.forEach((event) => {
	REMINDERS.forEach((reminder) => {
		const { date, year, month, day, tick } = DateUtils.calculateReminder(event, reminder);
		if (!data[year]) {
			data[year] = {};
		}
		if (!data[year][month]) {
			data[year][month] = {};
		}
		if (!data[year][month][day]) {
			data[year][month][day] = [];
		}
		data[year][month][day].push({
			tick,
			date,
			event,
			reminder
		});
	});
});
const yearWiseArray: Array<TYearlyEvents> = [];
for (const year in data) {
	const monthWiseArray = [];

	for (const month in data[year]) {
		const dayWiseArray = [];
		for (const day in data[year][month]) {
			const children = data[year][month][day];
			children.sort((a, b) => a.tick - b.tick);
			dayWiseArray.push({ day, children: children });
		}
		dayWiseArray.sort((a, b) => a.day - b.day);
		monthWiseArray.push({ month, children: dayWiseArray });
	}
	monthWiseArray.sort((a, b) => a.month - b.month);
	yearWiseArray.push({ year, children: monthWiseArray });
}
yearWiseArray.sort((a, b) => a.year - b.year);
console.timeEnd();

export const YEAR_MONTH_DAY_EVENTS = yearWiseArray;
