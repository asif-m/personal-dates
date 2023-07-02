<script lang="ts">
	import type { TMonthlyEvents } from '$lib/utils/store';
	import DayItem from './day-item.svelte';

	export let monthlyEvents: TMonthlyEvents;
	const month = monthlyEvents.month;
	const children = monthlyEvents.children;
</script>

<div class="section">
	{#each children as dailyEvents}
		<DayItem {dailyEvents} {month} />
	{/each}
</div>

<style>
	.section {
		/* margin-left: 8px; */
        margin:0;
        padding:0;
	}
</style>
