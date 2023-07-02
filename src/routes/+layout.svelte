<script>
	import './styles.css';
	import { NOW, YEAR_MONTH_DAY_EVENTS } from '../lib/utils/store';
	import YearItem from './year-item.svelte';
	import { PERSONAL_EVENTS } from '$lib/utils/personal-events';
	import PersonalItem from './personal-item.svelte';
	import { afterUpdate } from 'svelte';

	afterUpdate(() => {
		const nodes = document.querySelectorAll(
			`[data-scroll="${NOW.getFullYear()}_${NOW.getMonth()}_${NOW.getDate()}"]`
		);
		nodes.forEach((node) =>
			node.scrollIntoView({
				block: 'center',
				inline: 'center',
				behavior: 'instant'
			})
		);
	});
</script>

<div class="app">
	<div class="container">
		<div class="left">
			{#each YEAR_MONTH_DAY_EVENTS as yearEvents}
				<YearItem {yearEvents} />
			{/each}
		</div>
		<div class="right">
			<div class="right-container">
				{#each PERSONAL_EVENTS as personalEvent}
					<PersonalItem {personalEvent} />
				{/each}
			</div>
		</div>
	</div>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}
	.container {
		display: flex;
		flex-direction: row;
	}
	.left {
		max-width: 1200px;
		width: 30%;
		overflow-y: scroll;
		height: 99vh;
	}
	.right {
		width: 70%;
		overflow-y: scroll;
		height: 99vh;
	}
	.right-container {
		display: flex;
		flex-wrap: wrap;
		flex-direction: row;
	}
</style>
