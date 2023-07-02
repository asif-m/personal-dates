<script lang="ts">
	import { EVENTTYPE } from '$lib/utils/constants';
	import { DateUtils } from '$lib/utils/date-utils';
	import type { TDailyEvents } from '$lib/utils/store';
	import { getFormattedReminderText } from '$lib/utils/reminders';
	import Birthday from './birthday.svelte';
	import Wedding from './wedding.svelte';
	export let dailyEvents: TDailyEvents;
	export let month: number;
	export let year: number;
	const day = dailyEvents.day;
	const children = dailyEvents.children;
</script>

<div class="timeline" data-scroll={`${year}_${month}_${day}`}>
	<div class="divider" />
	<div class="contents">
		<div class="date">
			<div>{day} {DateUtils.getMonthString(month)}</div>
		</div>
		{#each children as eventDetail}
			<div class="item">
				<div>
					<div>
						<div>
							{#if eventDetail.event.type === EVENTTYPE.BIRTHDAY}
								<Birthday {eventDetail} />
							{:else}
								<Wedding {eventDetail} />
							{/if}
						</div>
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>

<style>
	.timeline {
		display: flex;
		flex-direction: row;
	}

	/* Title of the card */
	.date {
		color: #4cadad;
		/* position: relative; */
		min-width: 100px;
		padding: 0px 0px 12px 16px;
		font-size: 1rem;
		font-weight: 600;
	}
	.date::before {
		content: '';
		position: relative;
		width: 12px;
		height: 12px;
		background: white;
		border-radius: 1000px;
		left: -26px;
		top: 17px;
		border: 3px solid #4cadad;
		display: block;
	}
	.divider {
		width: 2px;
		background-color: black;
		margin-left: 10px;
	}

	.item {
		padding: 0px 0px 12px 40px;
	}
</style>
