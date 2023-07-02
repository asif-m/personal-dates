<script lang="ts">
	import { DateUtils } from '$lib/utils/date-utils';
	import type { TDailyEvents } from '$lib/utils/store';
	export let dailyEvents: TDailyEvents;
	export let month: number;
	const day = dailyEvents.day;
	const children = dailyEvents.children;
</script>

<div class="section">
	<div class="timeline">
		<div class="timeline">
			<div class="outer">
				{#each children as eventDetail}
					<div class="card">
						<div class="info">
							<h3 class="title">{day} {DateUtils.getMonthString(month)}</h3>
							<div class="eventData">
								{eventDetail.event.names.join(',')}
								{eventDetail.event.type.toString()}
							</div>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</div>

<style>
	.section {
		margin:0;
        padding:0;
	}
	.timeline {
		
	}

	/* Outer Layer with the timeline border */
	.outer {
		border-left: 2px solid #333;
	}

	/* Card container */
	.card {
		position: relative;
		margin: 0 0 0px 20px;
		padding-left: 10px;
		
		color: gray;
		border-radius: 8px;
		max-width: 400px;
	}

	/* Information about the timeline */
	.info {
		display: flex;
		flex-direction: column;
		/* gap: 10px; */
	}

	/* Title of the card */
	.title {
		color: #4CADAD;
		position: relative;
	}

	/* Timeline dot  */
	.title::before {
		content: '';
		position: absolute;
		width: 10px;
		height: 10px;
		background: white;
		border-radius: 999px;
		left: -39px;
		border: 3px solid #4CADAD;
	}
</style>
