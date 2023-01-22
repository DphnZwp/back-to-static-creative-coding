<script>
	let y;
	$: console.log(y)
</script>

<svelte:window bind:scrollY={y} />

<main>
	<div class="wrapper">
		<div class="door" class:show={y >= 100}>
			<div class="shape"></div>
			<div class="shape"></div>
			<div class="knob"></div>
		</div>
     <div class="inside"></div>
	</div>
</main>

<style>
	main {
		height: 150vh;
		background-color: #9ad1b2;
    display: grid;
    justify-items: center;
	}
	
	.wrapper {
    margin-top: 10em;
		position: fixed;
		height: 400px;
		width: 300px;
		border: 8px solid #6c4c31;
		perspective: 1000px;
	}
	
	.door {
		position: absolute;
		width: 100%;
		height: 100%;
		transition: all 0.5s;
		transform-origin: left;
		background-color: #906441;
		display: grid;
		place-content: center;
		gap: 1em;
	}
	
	.shape {
		width: 15em;
		height: 10em;
		border: 5px solid #5a4029;
	}
	
	.knob {
		left: auto;
		right: 1.35em;
		display: flex;
		margin-top: 12em;
		position: absolute;
		width: 10px;
		height: 50px;
		background-color: #D7DADE;
	}

	.inside {
		width: 100%;
		height: 100%;
		background-color: #212348;
	}
	
	.show {
		 transform: rotateY(-90deg);
	}
</style>