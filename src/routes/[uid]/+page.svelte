<script>
	import * as prismic from '@prismicio/helpers';
	import gsap from 'gsap';
	import {ScrollTrigger} from "gsap/dist/ScrollTrigger";    
	import { onMount } from "svelte";

	export let data;
	let { document } = data;
	gsap.registerPlugin(ScrollTrigger)

	onMount(() => {
		gsap.from("h1 span", { 
			delay: .25, 
			yPercent: 100, 
			ease: "back.out", 
			duration: 1.5 
		});
		
		gsap.from('.block-img:nth-child(2)', {
			scrollTrigger: {
				trigger: '.block-img:nth-child(2)',
				toggleActions:"restart none restart restart"
			},
			delay: .75,
			x: 65,
			opacity: 0,
			duration: 1,
		});

		gsap.from('.story__content p:not(.block-img):nth-child(1)', {
			scrollTrigger: {
				trigger: '.story__content p:not(.block-img):nth-child(1)',
				toggleActions:"restart none restart restart"
			},
			delay: .5,
			x: -65,
			opacity: 0,
			duration: 1,
		});

		gsap.from('.block-img:nth-child(3)', {
			scrollTrigger: {
				trigger: '.block-img:nth-child(3)',
				toggleActions:"restart none restart restart"
			},
			delay: .20,
			x: -65,
			opacity: 0,
			duration: 1.25,
		});

		gsap.from('.story__content p:not(.block-img):nth-child(4)', {
			scrollTrigger: {
				trigger: '.story__content p:not(.block-img):nth-child(4)',
				toggleActions:"restart none restart restart"
			},
			delay: .2,
			x: 65,
			opacity: 0,
			duration: 1.25,
		});

		gsap.from('.block-img:nth-child(5)', {
			scrollTrigger: {
				trigger: '.block-img:nth-child(5)',
				toggleActions:"restart none restart restart"
			},
			delay: .2,
			x: -65,
			opacity: 0,
			duration: 1.25,
		});

		gsap.from('.block-img:nth-child(6)', {
			scrollTrigger: {
				trigger: '.block-img:nth-child(6)',
				toggleActions:"restart none restart restart"
			},
			delay: .2,
			x: 65,
			opacity: 0,
			duration: 1.25,
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
		padding: 3em 7em 5em 8em;
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		align-items: center;
		gap: 5em;
	}
</style>