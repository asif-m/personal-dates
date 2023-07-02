<script lang="ts">
	import type { TMonthlyEvents } from '$lib/utils/store';
	import DayItem from './day-item.svelte';

	export let monthlyEvents: TMonthlyEvents;
	const month = monthlyEvents.month;
	const children = monthlyEvents.children;
</script>

<section class="section">
	{#each children as dailyEvents}
		<DayItem {dailyEvents} {month} />
	{/each}
</section>

<style>
	.section {
		/* margin-left: 8px; */
	}
</style>
