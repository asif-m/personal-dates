<script lang="ts">
	import { writable } from 'svelte/store';
	import { EVENTTYPE } from '$lib/utils/constants';
	import type { TPersonalEvent } from '$lib/utils/personal-events';
	import { DateUtils } from '$lib/utils/date-utils';
	export let personalEvent: TPersonalEvent;

	let date = personalEvent.date;
	let elapsedData = writable(DateUtils.getDifferenceBetweenTwoDates(new Date(Date.now()), date));

	setInterval(() => {
		elapsedData.update(() => DateUtils.getDifferenceBetweenTwoDates(new Date(Date.now()), date));
	}, 1000);
	const formattedDate = new Intl.DateTimeFormat('en-GB', {
		weekday: 'short',
		day: 'numeric',
		month: 'short',
		year: 'numeric'
	}).format(date);
	const formattedHijriDate = new Intl.DateTimeFormat('ar-TN-u-ca-islamic', {
		day: 'numeric',
		month: 'long',
		year: 'numeric'
	}).format(date);
</script>

<div class="container">
	<div class="title item">
		{#if personalEvent.type === EVENTTYPE.BIRTHDAY}
			{`🎂 ${personalEvent.names[0]}`}
		{:else}
			{`💍 ${personalEvent.names[0]} ❤️ ${personalEvent.names[1]}`}
		{/if}
	</div>
	<div class="item date">
		{formattedDate}
	</div>
	<div class="item hijri-date">
		{formattedHijriDate}
	</div>
	<div class="item">
		Y {$elapsedData.years}
	</div>
	<div class="item">
		M {$elapsedData.months}
	</div>
	<div class="item">
		W {$elapsedData.weeks}
	</div>
	<div class="item">
		D {$elapsedData.days}
	</div>
	<div class="item">
		H {$elapsedData.hours}
	</div>
	<div class="item">
		M {$elapsedData.minutes}
	</div>
	<div class="item">
		S {$elapsedData.seconds}
	</div>
</div>

<style>
	.container {
		min-width: 230px;
		border: 4px solid #4cadad;
		border-radius: 6px;
		margin: 4px;
	}
	.item {
		padding: 4px;
	}
	.title {
		background: #4cadad;
		color: white;
		font-size: 1.25rem;
		font-weight: 700;
	}
	.date {
		font-size: 1rem;
		font-weight: 500;
		font-weight: bold;
	}
	.hijri-date {
		font-size: 1rem;
		font-weight: 500;
		font-weight: bold;
	}
</style>
