<script lang="ts">
	export let text: string;
	export let color: string;
	export let backgroundColor: string;
</script>

<span class={'container'} style={`{color:${color}, background-color:${backgroundColor}`}>
	{text}
</span>

<style>
	.container {
		background-color: #4cadad;
		border: none;
		color: white;
		padding: 4px 4px;
		text-align: center;
		text-decoration: none;
		margin: 4px 4px;
		cursor: default;
		border-radius: 8px;
	}
</style>
