<script lang="ts">
	import type { TYearlyEvents } from '$lib/utils/store';
	import MonthItem from './month-item.svelte';
	

	export let yearEvents: TYearlyEvents;
	const year = yearEvents.year;
	const children = yearEvents.children;
</script>

<section class="section">
	<h1 class="title">{year}</h1>
	{#each children as monthlyEvent}
		<MonthItem monthlyEvents={monthlyEvent} year={year}/>
	{/each}
</section>

<style>
	.section {
		margin: 8px;
	}
	.title {
		--dateH: 3rem;
		height: var(--dateH);
		margin-inline: calc(var(--inlineP) * -1);
		text-align: center;
		background-color: #4cadad;
		color: white;
		font-size: 1.25rem;
		font-weight: 700;
		display: grid;
		place-content: center;
		position: relative;
		border-radius: 0 calc(var(--dateH) / 2) calc(var(--dateH) / 2) 0;
	}
</style>
