<script>
	import '../styles/globals.css';
</script>

<header>
	<nav>
		<li>
			<a href="/">Page transition on steroïds »</a>
			<a href="/bubblegum">Electrical ballenbak bubblegum animation »</a>
			<a href="/scroll-flip">Scroll flip »</a>
		</li>
	</nav>
</header>

<slot />

<style>
	header {
		position: fixed;
		width: 100%;
		z-index: 1;
	}

	li {
		padding: 2em 0;
		display: flex;
		gap: 2em;
		justify-content: center;
		background-color: #9AD1B2;
	}

	a:hover {
		text-decoration: underline;
	}
</style>