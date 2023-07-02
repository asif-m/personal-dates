<script lang="ts">
	import { DateUtils } from '$lib/utils/date-utils';
	import type { TDailyEvents } from '$lib/utils/store';
	export let dailyEvents: TDailyEvents;
    export let month: number;
	const day = dailyEvents.day;
	const children = dailyEvents.children;
</script>

<section class="section">
	<div>{day} {DateUtils.getMonthString(month)}</div>
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
