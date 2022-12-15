<script>
  // import * as prismic from '@prismicio/helpers';
	// export let data;
  // console.log(data);

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
			opacity: 0,
			duration: 1,
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
<main class="story-background">
	<section class="story">
		<h1 class="story__title">
			<span>
				<!-- {data.document.title} -->
			</span>
		</h1>
	
		<article class="story__content">
			<p>Casa do Fernandez is the other name of Ilojo Bar. It was assumed that the name Fernandez referred to a family of returnees from Brazil. They would have been the first owners of the property that later would be known as Ilojo Bar. There were indeed several returnees called Fernandez in Lagos' Popo Aguda – the Brazilian Quarter. But recent research has shown that this particular Fernandez was not a returnee, nor was he African. José Amoedo Fernandez was a Spaniard from the impoverished region of Galicia. In the nineteenth century, Galicia was one of the poorest regions of Spain. José Amoedo Fernandez, who was from a mountain village near Vigo, moved to Porto and possibly then to Brazil searching for greener pastures. From Brazil, some of the Gallegos followed the same trajectory as the African returnees to West Africa. No doubt Fernandez was lured by the trade possibilities. By the 1880's Lagos newspapers mention him regularly as a trader of spices and wine with a business on Tinubu Square. When he had traveled to Brazil and Portugal for a long time, a newspaper article in 1892 even welcomed him back to Lagos. The Spaniard purchased half of the plot on Tinubu Square in 1895, and ran his business Fernandez &amp; Co from there.</p>
			<!-- {@html prismic.asHTML(data.document.content)} -->
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