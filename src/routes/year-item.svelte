<script lang="ts">
	import type { TYearlyEvents } from '$lib/utils/store';
	import MonthItem from './month-item.svelte';

	export let yearEvents: TYearlyEvents;
	const year = yearEvents.year;
	const children = yearEvents.children;
</script>

<section class="section">
	<div class="title">{year}</div>
	{#each children as monthlyEvent}
		<MonthItem monthlyEvents={monthlyEvent} />
	{/each}
</section>

<style>
	.section {
		margin: 8px;
		border: 3px solid red;
		position: sticky;
	}
	.title {
		background: red;
	}
</style>
