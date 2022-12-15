<script>
  import * as prismic from '@prismicio/helpers';
	export let data;
  console.log(data);

	import gsap from 'gsap';
	import {ScrollTrigger} from "gsap/dist/ScrollTrigger";    
	import { onMount } from "svelte";

	gsap.registerPlugin(ScrollTrigger)
	onMount(() => {
		gsap.from("h1 span", { 
			delay: .25, 
			yPercent: 100, 
			ease: "back.out", 
			duration: 1.5 
		});
		
		gsap.from('.story__content p:not(.block-img):nth-child(1)', {
			scrollTrigger: {
				trigger: '.story__content p:not(.block-img):nth-child(1)',
				toggleActions:"restart none restart restart"
			},
			delay: .5,
			x: -65,
			duration: 1,
		});
		
		gsap.from('.block-img:nth-child(2)', {
			scrollTrigger: {
				trigger: '.block-img:nth-child(2)',
				toggleActions:"restart none restart restart"
			},
			delay: .75,
			x: 65,
			duration: 1,
		});
		gsap.from('.block-img:nth-child(3)', {
			scrollTrigger: {
				trigger: '.block-img:nth-child(3)',
				toggleActions:"restart none restart restart"
			},
			delay: .20,
			x: -65,
			duration: 1.25,
		});
		gsap.from('.story__content p:not(.block-img):nth-child(4)', {
			scrollTrigger: {
				trigger: '.story__content p:not(.block-img):nth-child(4)',
				toggleActions:"restart none restart restart"
			},
			delay: .2,
			x: 65,
			duration: 1.25,
		});
		gsap.from('.block-img:nth-child(5)', {
			scrollTrigger: {
				trigger: '.block-img:nth-child(5)',
				toggleActions:"restart none restart restart"
			},
			delay: .2,
			x: -65,
			duration: 1.25,
		});
		gsap.from('.block-img:nth-child(6)', {
			scrollTrigger: {
				trigger: '.block-img:nth-child(6)',
				toggleActions:"restart none restart restart"
			},
			delay: .2,
			x: 65,
			duration: 1.25,
		});
	});
</script>
<main class="story-background">
	<section class="story">
		<h1 class="story__title">
			<span>
				{data.document.title}
			</span>
		</h1>
	
		<article class="story__content">
			{@html prismic.asHTML(data.document.content)}
	</article>
	</section>
</main>

<style>
	.story-background {
		background-image: url('/assets/images/bg-red.webp');
		background-size: cover;
		background-repeat: no-repeat;
	}
	.story {
		padding-top: 5em;
		color: #fff;
	}
	
	.story__title span {
    display: block;
	}

	.story__content {
		padding: 3em 7em 5em 8em;
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 5em;
	}
</style>