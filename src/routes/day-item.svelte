<script lang="ts">
	import type { TDailyEvents } from '$lib/utils/store';
	export let dailyEvents: TDailyEvents;
	const day = dailyEvents.day;
	const children = dailyEvents.children;
</script>

<section class="section">
	<div>Day : {day}</div>
	{#each children as eventDetail}
		<div class="eventData">
			{eventDetail.event.names.join(',')}
			{eventDetail.event.type.toString()}
		</div>
	{/each}
</section>

<style>
	.section {
		margin-left: 8px;
	}
	.eventData {
		margin-left: 8px;
	}
</style>
