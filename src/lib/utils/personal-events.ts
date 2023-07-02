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
		names: ['Siew'],
		date: new Date(1983, MONTH.JAN, 1, 12, 25),
		type: EVENTTYPE.BIRTHDAY
	},
	{
		names: ['Kurup'],
		date: new Date(1983, MONTH.JAN, 25, 12, 25),
		type: EVENTTYPE.BIRTHDAY
	},
	{
		names: ['Jumbo'],
		date: new Date(1983, MONTH.FEB, 25, 12, 25),
		type: EVENTTYPE.BIRTHDAY
	},
	{
		names: ['Reeder'],
		date: new Date(1983, MONTH.MAR, 25, 12, 25),
		type: EVENTTYPE.BIRTHDAY
	},
	{
		names: ['Reek'],
		date: new Date(1983, MONTH.APR, 25, 12, 25),
		type: EVENTTYPE.BIRTHDAY
	},
	{
		names: ['Achuta'],
		date: new Date(1983, MONTH.MAY, 25, 12, 25),
		type: EVENTTYPE.BIRTHDAY
	},
	{
		names: ['Chama'],
		date: new Date(1983, MONTH.JUN, 25, 12, 25),
		type: EVENTTYPE.BIRTHDAY
	},
	{
		names: ['Sikandar'],
		date: new Date(1983, MONTH.JUL, 25, 12, 25),
		type: EVENTTYPE.BIRTHDAY
	},
	{
		names: ['Maimuna'],
		date: new Date(1983, MONTH.AUG, 25, 12, 25),
		type: EVENTTYPE.BIRTHDAY
	},
	{
		names: ['Fara'],
		date: new Date(1983, MONTH.SEP, 25, 12, 25),
		type: EVENTTYPE.BIRTHDAY
	},
	{
		names: ['Chappi'],
		date: new Date(1983, MONTH.OCT, 25, 12, 25),
		type: EVENTTYPE.BIRTHDAY
	},
	{
		names: ['Naisaburi'],
		date: new Date(1983, MONTH.NOV, 25, 12, 25),
		type: EVENTTYPE.BIRTHDAY
	},
	{
		names: ['Gorak'],
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
		type: EVENTTYPE.WEDDING
	}
];
