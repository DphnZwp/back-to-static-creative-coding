<script>
	import '../styles/globals.css';
</script>

<svelte:head>
	<title>Page transition on steroïds</title>
	<!-- FONTS -->
</svelte:head>

<header>
	<nav>
		<li>
			<a href="/">Page transition on steroïds »</a>
			<a href="/bubblegum">Electrical ballenbak bubblegum animation »</a>
		</li>
	</nav>
</header>

<main>
	<slot />
</main>

<style>
	li {
		margin-top: 2em;
		display: flex;
		gap: 2em;
		justify-content: center;
	}

	a:hover {
		text-decoration: underline;
	}
</style>