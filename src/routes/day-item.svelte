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
		
        <div class="divider"></div>
		<div class="contents">
            <div class="date">
                <div>{day} {DateUtils.getMonthString(month)}</div>
            </div>
			{#each children as eventDetail}
				<div class="item">
					<div>
						<div>
							<div>
								{eventDetail.event.names.join(',')}
								{eventDetail.event.type.toString()}
							</div>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>

<style>
	.section {
		
	}
	.timeline {
		display: flex;
		flex-direction: row;
	}

	/* Title of the card */
	.date {
		color: #4cadad;
		/* position: relative; */
		min-width: 100px;
        padding:0px 0px 12px 16px
		
	}
    .date::before {
		content: '';
		position: absolute;
		width: 12px;
		height: 12px;
		background: white;
		border-radius: 1000px;
		left: 10px;
		border: 3px solid #4cadad;
	}
    .divider{
        width:2px;
        background-color: black;
        margin-left: 10px;

    }
    /* .contents {
		padding-left: 10px;
        border-left: 2px solid #333;
	} */
	/* Timeline dot 
	.date::before {
		content: '';
		position: absolute;
		width: 10px;
		height: 10px;
		background: white;
		border-radius: 999px;
		left: -9px;
		top: 21px;
		border: 3px solid #4cadad;
	}
	*/
    .item{
      padding:0px 0px 12px 40px
    } 
</style>
