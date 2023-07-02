<script lang="ts">
	import { getFormattedReminderText } from '$lib/utils/reminders';
	import type { TEventDetail } from '$lib/utils/store';
	import Pill from '../shared/pill.svelte';
	export let eventDetail: TEventDetail;
	const reminderText = getFormattedReminderText(eventDetail.reminder);
	const persons = `${eventDetail.event.names[0]} 💍❤️ ${eventDetail.event.names[1]}`;
</script>

<div>
	{#if reminderText}
		<div>
			<Pill text={persons} color={'black'} backgroundColor={'white'} />
			<Pill text={reminderText} color={'black'} backgroundColor={'white'} />
		</div>
	{:else}
		<div>
			<Pill text={persons} color={'black'} backgroundColor={'white'} />
		</div>
	{/if}
</div>

<style>
</style>
