<script>
	import * as prismic from '@prismicio/helpers';
	import { gsap } from "gsap";
	import { onMount } from "svelte";

	export let data;
	let { document } = data;

	onMount(() => {
		gsap.from("h1 span", { delay: .5, yPercent: 100, ease: "back.out", duration: 1.5 })
		gsap.from(".story__content p:not(.block-img)", {
			duration: 2,
			scale: 0.5, 
			opacity: 0, 
			delay: 1.5, 
			stagger: 0.2,
			ease: "back.out", 
			force3D: true
		});
		gsap.from(".block-img", {
			duration: 2,
			scale: 0.5, 
			opacity: 0, 
			delay: 2, 
			stagger: 0.2,
			ease: "back.out", 
			force3D: true
		});
	});
</script>

<section class="story">
	<h1 class="story-title">
		<span>
			A Spanish migrant looking for greener pastures
		</span>
	</h1>

	<article class="story__content">
      {@html prismic.asHTML(document.data.content)}
	</article>
</section>

<style>
	.story {
		padding-top: 5em;
	}

	h1 span {
    display: block;
	}

	.story__content {
		padding: 3em 7em;
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		align-items: center;
		gap: 5em;
	}
</style>