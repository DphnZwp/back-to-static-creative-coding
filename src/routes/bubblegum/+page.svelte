<script>
  	let position = { x: 0, y: 0 };
	
	const move = (e) => {
		position = { x: e.clientX, y: e.clientY };
	};
</script>


<section class="bubblegum">
  <h1><span>Bubblegum</span> Magnet</h1>
</section>

<svg style="transform: translate({position.x}px,{position.y}px)" width="128" height="147" viewBox="0 0 128 147" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g filter="url(#filter0_d_44_231)">
  <path d="M31 99H23C17.4772 99 13 103.477 13 109V122C13 127.523 17.4772 132 23 132H31C36.5228 132 41 127.523 41 122V109C41 103.477 36.5228 99 31 99Z" fill="white" stroke="white" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M115 99H107C101.477 99 97 103.477 97 109V122C97 127.523 101.477 132 107 132H115C120.523 132 125 127.523 125 122V109C125 103.477 120.523 99 115 99Z" fill="white" stroke="white" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M124.84 61.4767C124.84 45.9677 118.948 31.0939 108.461 20.1274C97.9744 9.16095 83.7509 3 68.9201 3C54.0892 3 39.8658 9.16095 29.3788 20.1274C18.8917 31.0939 13.0002 45.9677 13.0002 61.4767L13 108H40.8532L40.8534 61.4767C40.8534 57.6224 41.5794 53.8058 42.9898 50.2449C44.4003 46.684 46.4677 43.4484 49.0739 40.723C51.6801 37.9976 54.7742 35.8358 58.1795 34.3608C61.5847 32.8858 65.2343 32.1267 68.9201 32.1267C72.6058 32.1267 76.2555 32.8858 79.6607 34.3608C83.0659 35.8358 86.16 37.9976 88.7663 40.723C91.3725 43.4484 93.4399 46.684 94.8503 50.2449C96.2608 53.8058 96.9868 57.6224 96.9868 61.4767V108H124.84V61.4767Z" fill="#BA3A51" stroke="white" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
  </g>
  <defs>
  <filter id="filter0_d_44_231" x="0" y="0" width="128" height="147" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
  <feOffset dx="-10" dy="12"/>
  <feCompositionite in2="hardAlpha" operator="out"/>
  <feColorMatrix type="matrix" values="0 0 0 0 0.729412 0 0 0 0 0.227451 0 0 0 0 0.317647 0 0 0 1 0"/>
  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_44_231"/>
  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_44_231" result="shape"/>
  </filter>
  </defs>
  </svg>

<svelte:window on:mousemove={move}/>

<style>
  :global(header a) {
    color: black;
  }

  .bubblegum {
    padding-top: 2em;
    display: flex;
    justify-content: center;
  }

  h1 {
    font-size: 8rem;
    padding: .9rem;
    font-family:"PT Banana Split";
    color: #fff;
    -webkit-text-stroke: 1px #BA3A51;
    text-shadow: -13px 9px #BA3A51;
    width: min-content;
    line-height: 1;
  }

  span {
    font-size: 10rem;
    color: #BA3A51;
    text-shadow: -5px 5px #9AD1B2, -15px 15px #BA3A51;
    -webkit-text-stroke: 1px white;
  }
</style>