<script lang="ts">
	import { getFormattedReminderText } from '$lib/utils/reminders';
	import type { TEventDetail } from '$lib/utils/store';
	import Pill from './pill.svelte';
	export let eventDetail: TEventDetail;
	const reminderText = getFormattedReminderText(eventDetail.reminder);
	const person = eventDetail.event.names[0];
</script>

<div>
	{#if reminderText}
    <div>
        <Pill text={`🎂 ${person}`} color={"black"} backgroundColor={"white"}></Pill>
        <Pill text={reminderText} color={"black"} backgroundColor={"white"}></Pill>
    </div>
	{:else}
    <div>
        <Pill text={`🎂 ${person}`} color={"black"} backgroundColor={"white"}></Pill>
    </div>
	{/if}
</div>

<style>
</style>
