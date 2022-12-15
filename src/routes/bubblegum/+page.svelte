<script>
  	let position = { x: 0, y: 0 };
	
	const move = (e) => {
		position = { x: e.clientX, y: e.clientY };
	};
</script>

<main on:mousemove={move}>
  <svg class="bubblegum__magnet" style="transform: translate({position.x}px,{position.y}px)" width="128" height="147" viewBox="0 0 128 147" fill="none" xmlns="http://www.w3.org/2000/svg">
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
  
  <section class="bubblegum">
    <h1><span>Bubblegum</span> Magnet</h1>

    <svg class="bubblegum__illustration" width="100%" height="393" viewBox="0 0 1385 393" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="774.143" cy="161.112" r="35" transform="rotate(8.84286 774.143 161.112)" fill="#E89398" stroke="#BA3A51" stroke-width="5"/>
      <circle cx="112.5" cy="245.5" r="35" fill="#E89398" stroke="#BA3A51" stroke-width="5"/>
      <circle cx="160.5" cy="264.5" r="28" fill="#E89398" stroke="#BA3A51" stroke-width="5"/>
      <circle cx="707.94" cy="150.812" r="28" transform="rotate(8.84286 707.94 150.812)" fill="#E89398" stroke="#BA3A51" stroke-width="5"/>
      <circle cx="1144.5" cy="174.5" r="28" fill="#E89398" stroke="#BA3A51" stroke-width="5"/>
      <circle cx="812.5" cy="88.5" r="35" fill="#E89398" stroke="#BA3A51" stroke-width="5"/>
      <circle cx="471.5" cy="125.5" r="35" fill="#E89398" stroke="#BA3A51" stroke-width="5"/>
      <circle cx="278.5" cy="216.5" r="35" fill="#E89398" stroke="#BA3A51" stroke-width="5"/>
      <circle cx="339.5" cy="168.5" r="35" fill="#E89398" stroke="#BA3A51" stroke-width="5"/>
      <circle cx="691.5" cy="253.5" r="35" fill="#E89398" stroke="#BA3A51" stroke-width="5"/>
      <circle cx="557.5" cy="178.5" r="35" fill="#E89398" stroke="#BA3A51" stroke-width="5"/>
      <circle cx="1274.5" cy="91.5" r="35" fill="#E89398" stroke="#BA3A51" stroke-width="5"/>
      <circle cx="427.5" cy="37.5" r="35" fill="#E89398" stroke="#BA3A51" stroke-width="5"/>
      <circle cx="473.5" cy="190.5" r="26" fill="#E89398" stroke="#BA3A51" stroke-width="5"/>
      <circle cx="502.5" cy="54.5" r="35" fill="#E89398" stroke="#BA3A51" stroke-width="5"/>
      <circle cx="444.5" cy="234.5" r="35" fill="#E89398" stroke="#BA3A51" stroke-width="5"/>
      <circle cx="289.5" cy="372.5" r="35" fill="#E89398" stroke="#BA3A51" stroke-width="5"/>
      <circle cx="113.5" cy="348.5" r="35" fill="#E89398" stroke="#BA3A51" stroke-width="5"/>
      <circle cx="667.5" cy="347.5" r="35" fill="#E89398" stroke="#BA3A51" stroke-width="5"/>
      <circle cx="988.5" cy="291.5" r="35" fill="#E89398" stroke="#BA3A51" stroke-width="5"/>
      <circle cx="1107.5" cy="408.5" r="35" fill="#E89398" stroke="#BA3A51" stroke-width="5"/>
      <circle cx="1116.5" cy="279.5" r="35" fill="#E89398" stroke="#BA3A51" stroke-width="5"/>
      <circle cx="936.5" cy="393.5" r="35" fill="#E89398" stroke="#BA3A51" stroke-width="5"/>
      <circle cx="1347.5" cy="401.5" r="35" fill="#E89398" stroke="#BA3A51" stroke-width="5"/>
      <circle cx="1245.5" cy="216.5" r="35" fill="#E89398" stroke="#BA3A51" stroke-width="5"/>
      <circle cx="988.5" cy="106.5" r="35" fill="#E89398" stroke="#BA3A51" stroke-width="5"/>
      <circle cx="792.5" cy="243.5" r="35" fill="#E89398" stroke="#BA3A51" stroke-width="5"/>
      <circle cx="883.5" cy="185.5" r="35" fill="#E89398" stroke="#BA3A51" stroke-width="5"/>
      <circle cx="1151.5" cy="129.5" r="35" fill="#E89398" stroke="#BA3A51" stroke-width="5"/>
      <circle cx="1207.5" cy="358.5" r="35" fill="#E89398" stroke="#BA3A51" stroke-width="5"/>
      <circle cx="1245.5" cy="346.5" r="35" fill="#E89398" stroke="#BA3A51" stroke-width="5"/>
      <circle cx="521.5" cy="359.5" r="22" fill="#E89398" stroke="#BA3A51" stroke-width="5"/>
      <circle cx="849.5" cy="318.5" r="35" fill="#E89398" stroke="#BA3A51" stroke-width="5"/>
      <circle cx="710.5" cy="346.5" r="35" fill="#E89398" stroke="#BA3A51" stroke-width="5"/>
      <circle cx="403.5" cy="364.5" r="35" fill="#E89398" stroke="#BA3A51" stroke-width="5"/>
      <circle cx="37.5" cy="310.5" r="35" fill="#E89398" stroke="#BA3A51" stroke-width="5"/>
      <circle cx="546" cy="268" r="23.5" fill="#E89398" stroke="#BA3A51" stroke-width="5"/>
      <circle cx="963" cy="216" r="23.5" fill="#E89398" stroke="#BA3A51" stroke-width="5"/>
      </svg>    
  </section>
</main>

<style>
  .bubblegum {
    padding-top: 2em;
    display: grid;
    grid-template-columns: 1fr;
    gap: 1em;
    justify-items: center;
    cursor: url(/assets/images/cursor.png), auto;
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

  .bubblegum__magnet {
    position: absolute;
    z-index: 1;
    display: block;
  }

  .bubblegum__illustration {
    display: block;
    position: relative;
  }
</style>