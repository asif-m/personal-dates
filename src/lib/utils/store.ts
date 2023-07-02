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
const now = new Date(Date.now());
const nowTick = now.getTime();
let closest = {
	initialized: false,
	minTickDiff: 0,
	year: 0,
	month: 0,
	day: 0
};

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
		const nowTickDiff = Math.abs(nowTick - tick);
		if (!closest.initialized || nowTickDiff < closest.minTickDiff) {
			closest = {
				minTickDiff: nowTickDiff,
				year,
				month,
				day,
				initialized: true
			};
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
			dayWiseArray.push({ day: parseInt(day, 10), children: children });
		}
		dayWiseArray.sort((a, b) => a.day - b.day);
		monthWiseArray.push({ month: parseInt(month, 10), children: dayWiseArray });
	}
	monthWiseArray.sort((a, b) => a.month - b.month);
	yearWiseArray.push({ year: parseInt(year, 10), children: monthWiseArray });
}
yearWiseArray.sort((a, b) => a.year - b.year);
console.timeEnd();

export const YEAR_MONTH_DAY_EVENTS = yearWiseArray;
export const CLOSEST_DATE_TO_TODAY = closest;
