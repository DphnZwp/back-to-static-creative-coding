<script>
	export let data;
  const stories = data.documents
</script>

<h1>Story links</h1>
{#each stories as data}
		<a href="/{data.uid}">{data.data.title}</a>
{/each}

<style>
	a {
		color: #fff;
		font-size: 2rem;
		text-decoration: none;
		text-align: center;
		display: flex;
		justify-content: center;
	}

	a:hover {
		text-decoration: underline;
	}
</style>