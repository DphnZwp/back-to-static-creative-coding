<script>
	import gsap from 'gsap';
	import {ScrollTrigger} from "gsap/ScrollTrigger";    
	import { onMount } from "svelte";

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger)
		gsap.from("h1 span", { 
			delay: .25, 
			yPercent: 100, 
			ease: "back.out", 
			duration: 1.5 
		});
		
		gsap.from('.story__content p:not(.block-img):nth-child(1)', {
			delay: .5,
			x: -800,
			ease: "back.out(1)",
			duration: 3,
		});
		
		gsap.from('.block-img:nth-child(2)', {
			delay: .75,
			x: 800,
			ease: "back.out(1)",
			duration: 3,
		});

		gsap.from('.block-img:nth-child(3)', {
			scrollTrigger: {
				trigger: '.block-img:nth-child(3)',
				toggleActions:"restart none restart restart"
			},
			delay: .20,
			x: -100,
			ease: "back.out(1)",
			duration: 1.25,
		});

		gsap.from('.story__content p:not(.block-img):nth-child(4)', {
			scrollTrigger: {
				trigger: '.story__content p:not(.block-img):nth-child(4)',
				toggleActions:"restart none restart restart"
			},
			delay: .2,
			x: 100,
			ease: "back.out(1)",
			duration: 1.25,
		});

		gsap.from('.block-img:nth-child(5)', {
			scrollTrigger: {
				trigger: '.block-img:nth-child(5)',
				toggleActions:"restart none"
			},
			delay: .2,
			x: -100,
			ease: "back.out(1)",
			duration: 1.25,
		});
		
		gsap.from('.block-img:nth-child(6)', {
			scrollTrigger: {
				trigger: '.block-img:nth-child(6)',
				toggleActions:"restart none"
			},
			delay: .2,
			x: 65,
			ease: "back.out(1)",
			duration: 1.25,
		});
	});
</script>

<svelte:head>
	<title>Page transition on steroïds</title>
</svelte:head>

<main class="story-background">
	<section class="story">
		<h1 class="story__title">
			<span>
				A Spanish migrant looking for greener pastures
			</span>
		</h1>
	
		<article class="story__content">
			<p>Casa do Fernandez is the other name of Ilojo Bar. It was assumed that the name Fernandez referred to a family of returnees from Brazil. They would have been the first owners of the property that later would be known as Ilojo Bar. There were indeed several returnees called Fernandez in Lagos' Popo Aguda – the Brazilian Quarter. But recent research has shown that this particular Fernandez was not a returnee, nor was he African. José Amoedo Fernandez was a Spaniard from the impoverished region of Galicia. In the nineteenth century, Galicia was one of the poorest regions of Spain. José Amoedo Fernandez, who was from a mountain village near Vigo, moved to Porto and possibly then to Brazil searching for greener pastures. From Brazil, some of the Gallegos followed the same trajectory as the African returnees to West Africa. No doubt Fernandez was lured by the trade possibilities. By the 1880's Lagos newspapers mention him regularly as a trader of spices and wine with a business on Tinubu Square. When he had traveled to Brazil and Portugal for a long time, a newspaper article in 1892 even welcomed him back to Lagos. The Spaniard purchased half of the plot on Tinubu Square in 1895, and ran his business Fernandez & Co from there.</p>
			<p class="block-img">
				<img src="/assets/images/7dc8aa58-e348-429b-ab4f-62aceb4666c2_galician+watercarriers+in+lisbon-early+xx-photo+arquivo+municipal+de+lisboa-by+Joshua+benoliel.avif" alt="">
			</p>
			<p class="block-img">
				<img src="assets/images/a29af5df-a28e-4f38-a9ad-0cbfae1aec20_notice+dissolution+partnership.avif" alt="">
			</p>
			<p>Most likely the name Casa do Fernandez stems from that era. The trading company was one of the biggest in the region. Fernandez did not own the entire plot that the monument we would later come to know as Ilojo Bar until 1903, dating the building much later than always thought in the early twentieth century. Fernandez lived on the top floor, the ground floor space on busy Tinubu Square that was not used for the own business, was rented out. After first partnering with a Portuguese businessman who died unexpectedly at sea, Fernandez sent out for an old friend in Galicia who came to Lagos on his invitation: Napoleon Rey Couto. In the 1910's José Amoedo Fernandez decided to go home for good. He dissolved his businesses and sold his property to his business partner Couto in 1914. His remaining years he spent in Galicia, where he died at the age of 73 in 1938. The Gallego papers mention him regularly as a well respected citizen, but he was never mentioned again in Lagos papers. Couto made a much more lasting impression on the city. He died less than five years after he had acquired Casa do Fernandez, in 1918, in his apartment on Tinubu Square. He was 46 years old. The local weekly described him as a beloved Lagosian: 'though a Spaniard at birth he was very popular with the natives'. After the funeral service in Holy Cross Cathedral, Napoleon Rey Couto was buried in Ikoyi Cemetery. The history of Fernandez' house might not be a story of emancipation from slavery, it remains a story of emancipation: from a second class Spanish citizen who left to return home a wealthy and respected man. And a reminder that economic migration is of all ages. The history of Fernandez' house might not be a story of emancipation from slavery, it remains a story of emancipation: from a second class Spanish citizen who left to return home a wealthy and respected man. And a reminder that economic migration is of all ages.</p>
			<p class="block-img">
				<img src="assets/images/80e15f1a-940f-4428-934e-a182a49015d0_to+let-fernandez+&+co.avif" alt="">
			</p>
			<p class="block-img">
				<img src="assets/images/Cidade_do_Porto_com_a_Ponte_Pênsil,_meados_do_século_XIX-1.png" alt="">
			</p>
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
		gap: 7em;
	}
</style>