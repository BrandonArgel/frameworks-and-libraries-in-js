<script>
	import Form from "./Form.svelte";
</script>

<main>
	<h2>Películas</h2>
	<Form />
</main>

<style>
	:global(body) {
		--bg: #61ffff;
		--color: #000000;

		background: var(--bg);
		color: var(--color);
	}
</style>
