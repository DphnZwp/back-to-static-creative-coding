<script>
  let position = { x: 0, y: 0 };
  const move = (e) => {
    position = { x: e.clientX/6, y: e.clientY/6 };
  };
</script>

<svelte:head>
	<title>Electrical ballenbak bubblegum animation</title>
</svelte:head>
<main on:mousemove={move}>
<section class="bubblegum">
  <h1><span>Bubblegum</span> Magnet</h1>
  <svg style="transform: translate({position.x}px,{position.y}px)" class="bubblegum__illustration" width="100%" height="393" viewBox="0 0 1385 393" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="774.143" cy="161.112" r="35" transform="rotate(8.84286 774.143 161.112)" fill="#E89398" stroke="#BA3A51" stroke-width="5"/>
    <circle cx="112.5" cy="245.5" r="35" fill="#E89398" stroke="#BA3A51" stroke-width="5"/>
    <circle cx="160.5" cy="264.5" r="28" fill="#E89398" stroke="#BA3A51" stroke-width="5"/>
    <circle cx="707.94" cy="150.812" r="28" transform="rotate(8.84286 707.94 150.812)" fill="#E89398" stroke="#BA3A51" stroke-width="5"/>
    <circle cx="1144.5" cy="174.5" r="28" fill="#E89398" stroke="#BA3A51" stroke-width="5"/>
    <circle cx="812.5" cy="88.5" r="35" fill="#E89398" stroke="#BA3A51" stroke-width="5"/>
    <circle style="transform: translate({position.x}px,{position.y}px)" cx="471.5" cy="125.5" r="35" fill="#E89398" stroke="#BA3A51" stroke-width="5"/>
    <circle style="transform: translate({position.x}px,{position.y}px)" cx="278.5" cy="216.5" r="35" fill="#E89398" stroke="#BA3A51" stroke-width="5"/>
    <circle cx="339.5" cy="168.5" r="35" fill="#E89398" stroke="#BA3A51" stroke-width="5"/>
    <circle cx="691.5" cy="253.5" r="35" fill="#E89398" stroke="#BA3A51" stroke-width="5"/>
    <circle style="transform: translate({position.x}px,{position.y}px)" cx="557.5" cy="178.5" r="35" fill="#E89398" stroke="#BA3A51" stroke-width="5"/>
    <circle cx="1274.5" cy="91.5" r="35" fill="#E89398" stroke="#BA3A51" stroke-width="5"/>
    <circle cx="427.5" cy="37.5" r="35" fill="#E89398" stroke="#BA3A51" stroke-width="5"/>
    <circle cx="473.5" cy="190.5" r="26" fill="#E89398" stroke="#BA3A51" stroke-width="5"/>
    <circle cx="502.5" cy="54.5" r="35" fill="#E89398" stroke="#BA3A51" stroke-width="5"/>
    <circle style="transform: translate({position.x}px,{position.y}px)" cx="444.5" cy="234.5" r="35" fill="#E89398" stroke="#BA3A51" stroke-width="5"/>
    <circle style="transform: translate({position.x}px,{position.y}px)" cx="289.5" cy="372.5" r="35" fill="#E89398" stroke="#BA3A51" stroke-width="5"/>
    <circle cx="113.5" cy="348.5" r="35" fill="#E89398" stroke="#BA3A51" stroke-width="5"/>
    <circle style="transform: translate({position.x}px,{position.y}px)" cx="667.5" cy="347.5" r="35" fill="#E89398" stroke="#BA3A51" stroke-width="5"/>
    <circle cx="988.5" cy="291.5" r="35" fill="#E89398" stroke="#BA3A51" stroke-width="5"/>
    <circle cx="1107.5" cy="408.5" r="35" fill="#E89398" stroke="#BA3A51" stroke-width="5"/>
    <circle cx="1116.5" cy="279.5" r="35" fill="#E89398" stroke="#BA3A51" stroke-width="5"/>
    <circle cx="936.5" cy="393.5" r="35" fill="#E89398" stroke="#BA3A51" stroke-width="5"/>
    <circle cx="1347.5" cy="401.5" r="35" fill="#E89398" stroke="#BA3A51" stroke-width="5"/>
    <circle cx="1245.5" cy="216.5" r="35" fill="#E89398" stroke="#BA3A51" stroke-width="5"/>
    <circle cx="988.5" cy="106.5" r="35" fill="#E89398" stroke="#BA3A51" stroke-width="5"/>
    <circle style="transform: translate({position.x}px,{position.y}px)" cx="792.5" cy="243.5" r="35" fill="#E89398" stroke="#BA3A51" stroke-width="5"/>
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
  padding-top: 5em;
  display: grid;
  grid-template-columns: 1fr;
  gap: 1em;
  justify-items: center;
  cursor: url(/assets/images/magnet.png), auto;
  overflow: hidden;
  background-color: #9AD1B2;
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