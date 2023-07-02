import { EVENTTYPE, MONTH } from './constants';

export type TPersonalEvent = {
	names: Array<string>;
	date: Date;
	type: EVENTTYPE;
};

export const PERSONAL_EVENTS = [
	{
		names: ['Ahmed'],
		date: new Date(1945, MONTH.SEP, 10),
		type: EVENTTYPE.BIRTHDAY
	},
	{
		names: ['Nafeesa'],
		date: new Date(1958, MONTH.JUN, 21),
		type: EVENTTYPE.BIRTHDAY
	},
	{
		names: ['Shabana'],
		date: new Date(1978, MONTH.APR, 4),
		type: EVENTTYPE.BIRTHDAY
	},
	{
		names: ['Mumthaz'],
		date: new Date(1979, MONTH.MAY, 22),
		type: EVENTTYPE.BIRTHDAY
	},
	{
		names: ['Zareena'],
		date: new Date(1981, MONTH.FEB, 28),
		type: EVENTTYPE.BIRTHDAY
	},
	{
		names: ['Asif'],
		date: new Date(1983, MONTH.DEC, 25, 12, 25),
		type: EVENTTYPE.BIRTHDAY
	},
	{
		names: ['Shakira'],
		date: new Date(1987, MONTH.DEC, 5),
		type: EVENTTYPE.BIRTHDAY
	},
	{
		names: ['Saleem'],
		date: new Date(1963, MONTH.FEB, 1),
		type: EVENTTYPE.BIRTHDAY
	},
	{
		names: ['Hazra'],
		date: new Date(1975, MONTH.JAN, 2),
		type: EVENTTYPE.BIRTHDAY
	},
	{
		names: ['Shameeha'],
		date: new Date(1994, MONTH.DEC, 29),
		type: EVENTTYPE.BIRTHDAY
	},
	{
		names: ['Shazia'],
		date: new Date(1996, MONTH.MAY, 30),
		type: EVENTTYPE.BIRTHDAY
	},
	{
		names: ['Safreena'],
		date: new Date(1999, MONTH.SEP, 15),
		type: EVENTTYPE.BIRTHDAY
	},
	{
		names: ['Thasreefa'],
		date: new Date(2001, MONTH.JUN, 12),
		type: EVENTTYPE.BIRTHDAY
	},
	{
		names: ['Shaheed'],
		date: new Date(2008, MONTH.DEC, 22),
		type: EVENTTYPE.BIRTHDAY
	},
	{
		names: ['Rafeeq'],
		date: new Date(1970, MONTH.DEC, 15),
		type: EVENTTYPE.BIRTHDAY
	},
	{
		names: ['Usman'],
		date: new Date(1971, MONTH.JUN, 1),
		type: EVENTTYPE.BIRTHDAY
	},
	{
		names: ['Haneef'],
		date: new Date(1975, MONTH.MAR, 19),
		type: EVENTTYPE.BIRTHDAY
	},
	{
		names: ['Rasheed'],
		date: new Date(1984, MONTH.JAN, 29),
		type: EVENTTYPE.BIRTHDAY
	},
	{
		names: ['Thousif'],
		date: new Date(2000, MONTH.JUN, 25),
		type: EVENTTYPE.BIRTHDAY
	},
	{
		names: ['Raziq'],
		date: new Date(1995, MONTH.FEB, 4),
		type: EVENTTYPE.BIRTHDAY
	},
	// {
	// 	names: ['Ashique'],
	// 	date: new Date(2021, MONTH.MAY, 25, 15, 10, 0),
	// 	type: EVENTTYPE.BIRTHDAY
	// },
	{
		names: ['Shabana', 'Rafiq'],
		date: new Date(1997, MONTH.DEC, 22),
		type: EVENTTYPE.WEDDING
	},
	{
		names: ['Mumthaz', 'Usman'],
		date: new Date(2003, MONTH.SEP, 4),
		type: EVENTTYPE.WEDDING
	},
	{
		names: ['Zareena', 'Haneef'],
		date: new Date(2008, MONTH.MAR, 23),
		type: EVENTTYPE.WEDDING
	},
	{
		names: ['Asif', 'Shameeha'],
		date: new Date(2017, MONTH.APR, 29),
		type: EVENTTYPE.WEDDING
	},
	{
		names: ['Shakira', 'Rasheed'],
		date: new Date(2013, MONTH.APR, 22),
		type: EVENTTYPE.WEDDING
	},
	{
		names: ['Shazia', 'Raziq'],
		date: new Date(2022, MONTH.MAR, 6),
		type: EVENTTYPE.WEDDING
	},
	{
		names: ['Safreena', 'Ashique'],
		date: new Date(2023, MONTH.MAY, 27),
		type: EVENTTYPE.WEDDING
	},
	{
		names: ['Shahzeena'],
		date: new Date(1998, MONTH.NOV,13),
		type: EVENTTYPE.BIRTHDAY
	},
	{
		names: ['Shafeera'],
		date: new Date(2000, MONTH.JUL,10),
		type: EVENTTYPE.BIRTHDAY
	},
	{
		names: ['Shanum'],
		date: new Date(2004, MONTH.AUG, 3),
		type: EVENTTYPE.BIRTHDAY
	},
	{
		names: ['Raifa'],
		date: new Date(2013, MONTH.MAY, 23),
		type: EVENTTYPE.BIRTHDAY
	},
	{
		names: ['Hudaif'],
		date: new Date(2005, MONTH.AUG, 25),
		type: EVENTTYPE.BIRTHDAY
	},
	{
		names: ['Haifa'],
		date: new Date(2011, MONTH.NOV, 11),
		type: EVENTTYPE.BIRTHDAY
	},
	{
		names: ['Heba'],
		date: new Date(2016, MONTH.APR, 13),
		type: EVENTTYPE.BIRTHDAY
	},
	{
		names: ['Shazma'],
		date: new Date(2009, MONTH.MAR, 17),
		type: EVENTTYPE.BIRTHDAY
	},
	{
		names: ['Shaz'],
		date: new Date(2015, MONTH.APR, 17),
		type: EVENTTYPE.BIRTHDAY
	},
	{
		names: ['Haneesh'],
		date: new Date(2021, MONTH.DEC, 17),
		type: EVENTTYPE.BIRTHDAY
	},
	{
		names: ['Rilaa'],
		date: new Date(2021, MONTH.MAY, 25, 15, 10, 0),
		type: EVENTTYPE.BIRTHDAY
	},
	{
		names: ['Raheesh'],
		date: new Date(2014, MONTH.MAR,15),
		type: EVENTTYPE.BIRTHDAY
	},
	{
		names: ['Hamdan'],
		date: new Date(2021, MONTH.NOV, 4),
		type: EVENTTYPE.BIRTHDAY
	},
	
	// {
	// 	names: ['Random'],
	// 	date: new Date(1983, MONTH.JAN, 1, 12, 25),
	// 	type: EVENTTYPE.BIRTHDAY
	// },
	// {
	// 	names: ['Siew'],
	// 	date: new Date(1983, MONTH.JAN, 1, 12, 25),
	// 	type: EVENTTYPE.BIRTHDAY
	// },
	// {
	// 	names: ['Kurup'],
	// 	date: new Date(1983, MONTH.JAN, 25, 12, 25),
	// 	type: EVENTTYPE.BIRTHDAY
	// },
	// {
	// 	names: ['Jumbo'],
	// 	date: new Date(1983, MONTH.FEB, 25, 12, 25),
	// 	type: EVENTTYPE.BIRTHDAY
	// },
	// {
	// 	names: ['Reeder'],
	// 	date: new Date(1983, MONTH.MAR, 25, 12, 25),
	// 	type: EVENTTYPE.BIRTHDAY
	// },
	// {
	// 	names: ['Reek'],
	// 	date: new Date(1983, MONTH.APR, 25, 12, 25),
	// 	type: EVENTTYPE.BIRTHDAY
	// },
	// {
	// 	names: ['Achuta'],
	// 	date: new Date(1983, MONTH.MAY, 25, 12, 25),
	// 	type: EVENTTYPE.BIRTHDAY
	// },
	// {
	// 	names: ['Chama'],
	// 	date: new Date(1983, MONTH.JUN, 25, 12, 25),
	// 	type: EVENTTYPE.BIRTHDAY
	// },
	// {
	// 	names: ['Sikandar'],
	// 	date: new Date(1983, MONTH.JUL, 25, 12, 25),
	// 	type: EVENTTYPE.BIRTHDAY
	// },
	// {
	// 	names: ['Maimuna'],
	// 	date: new Date(1983, MONTH.AUG, 25, 12, 25),
	// 	type: EVENTTYPE.BIRTHDAY
	// },
	// {
	// 	names: ['Fara'],
	// 	date: new Date(1983, MONTH.SEP, 25, 12, 25),
	// 	type: EVENTTYPE.BIRTHDAY
	// },
	// {
	// 	names: ['Chappi'],
	// 	date: new Date(1983, MONTH.OCT, 25, 12, 25),
	// 	type: EVENTTYPE.BIRTHDAY
	// },
	// {
	// 	names: ['Naisaburi'],
	// 	date: new Date(1983, MONTH.NOV, 25, 12, 25),
	// 	type: EVENTTYPE.BIRTHDAY
	// },
	// {
	// 	names: ['Gorak'],
	// 	date: new Date(1983, MONTH.DEC, 25, 12, 25),
	// 	type: EVENTTYPE.BIRTHDAY
	// },
	
].sort((a,b)=> a.date.getTime()-b.date.getTime());
