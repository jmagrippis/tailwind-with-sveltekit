<script lang="ts">
	let count = 0

	const increment = (): void => {
		count += 1
	}
</script>

<button class="button" on:click={increment}>
	Clicks: {count}
</button>
