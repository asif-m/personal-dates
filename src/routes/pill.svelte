<script lang="ts">
	export let text: string;
	export let color: string;
	export let backgroundColor: string;
</script>

<div class={'container'} style={`{color:${color}, background-color:${backgroundColor}`}>
	{text}
</div>

<style>
	.container {
		background-color:#4cadad;
		border: none;
		color: white;
		padding: 4px 4px;
		text-align: center;
		text-decoration: none;
		display: inline-block;
		margin: 4px 4px;
		cursor: pointer;
		border-radius: 8px;
	}
</style>
