import { EVENTTYPE, MONTH } from './constants';

export type TPersonalEvent = {
	names: Array<string>;
	date: Date;
	type: EVENTTYPE;
};

export const PERSONAL_EVENTS = [
	{
		names: ['Asif'],
		date: new Date(1983, MONTH.DEC, 25, 12, 25),
		type: EVENTTYPE.BIRTHDAY
	},
	{
		names: ['Random'],
		date: new Date(1983, MONTH.JAN, 1, 12, 25),
		type: EVENTTYPE.BIRTHDAY
	},
	{
		names: ['Random 1'],
		date: new Date(1983, MONTH.JAN, 25, 12, 25),
		type: EVENTTYPE.BIRTHDAY
	},
	{
		names: ['Random 2'],
		date: new Date(1983, MONTH.FEB, 25, 12, 25),
		type: EVENTTYPE.BIRTHDAY
	},
	{
		names: ['Random 3'],
		date: new Date(1983, MONTH.MAR, 25, 12, 25),
		type: EVENTTYPE.BIRTHDAY
	},
	{
		names: ['Random 4'],
		date: new Date(1983, MONTH.APR, 25, 12, 25),
		type: EVENTTYPE.BIRTHDAY
	},
	{
		names: ['Random 5'],
		date: new Date(1983, MONTH.MAY, 25, 12, 25),
		type: EVENTTYPE.BIRTHDAY
	},
	{
		names: ['Random 6'],
		date: new Date(1983, MONTH.JUN, 25, 12, 25),
		type: EVENTTYPE.BIRTHDAY
	},
	{
		names: ['Random 7'],
		date: new Date(1983, MONTH.JUL, 25, 12, 25),
		type: EVENTTYPE.BIRTHDAY
	},
	{
		names: ['Random 8'],
		date: new Date(1983, MONTH.AUG, 25, 12, 25),
		type: EVENTTYPE.BIRTHDAY
	},
	{
		names: ['Random 9'],
		date: new Date(1983, MONTH.SEP, 25, 12, 25),
		type: EVENTTYPE.BIRTHDAY
	},
	{
		names: ['Random 10'],
		date: new Date(1983, MONTH.OCT, 25, 12, 25),
		type: EVENTTYPE.BIRTHDAY
	},
	{
		names: ['Random 11'],
		date: new Date(1983, MONTH.NOV, 25, 12, 25),
		type: EVENTTYPE.BIRTHDAY
	},
	{
		names: ['Random 12'],
		date: new Date(1983, MONTH.DEC, 25, 12, 25),
		type: EVENTTYPE.BIRTHDAY
	},
	{
		names: ['Shameeha'],
		date: new Date(1994, MONTH.DEC, 29),
		type: EVENTTYPE.BIRTHDAY
	},
	{
		names: ['Rilaa'],
		date: new Date(2021, MONTH.MAY, 25, 15, 10, 0),
		type: EVENTTYPE.BIRTHDAY
	},
	{
		names: ['Asif', 'Shameeha'],
		date: new Date(2017, MONTH.APR, 29),
		type: EVENTTYPE.ANNIVERSARY
	}
];
