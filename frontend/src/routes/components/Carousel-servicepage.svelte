<script>
  import { flip } from 'svelte/animate';

  export let images;
  export let imageWidth = 300;
  export let imageSpacing = 20;
  export let speed = 500;
  export let controlColor= '#444';
  export let controlScale = '0.5';


  const rotateLeft = e => {
    const transitioningImage = images[images.length - 1]
    document.getElementById(transitioningImage.id).style.opacity = 0;
    images = [images[images.length -1],...images.slice(0, images.length - 1)]
    setTimeout(() => (document.getElementById(transitioningImage.id).style.opacity = 1), speed);
  }

  const rotateRight = e => {
    const transitioningImage = images[0]
    document.getElementById(transitioningImage.id).style.opacity = 0;
    images = [...images.slice(1, images.length), images[0]]
    setTimeout(() => (document.getElementById(transitioningImage.id).style.opacity = 1), speed);
  }
</script>

<div id="carousel-container" class="mt-24">
  <div id="carousel-images">
    {#each images as image (image.id)}
    <div class="carousel-item">
      <img
       
        alt={image.id}
        id={image.id}
        class="block coursel-img"
        style={`width:${imageWidth}px; background:url(${image.href}); margin: 60px ${imageSpacing}px;`}
        />


        <div class="grid grid-rows-6 gap-1">
          <h5 class="text-xl">First slide label</h5>
          <p>Some representative placeholder content for the first slide.</p>
        </div>
      </div>
      
    {/each}
  </div>
  <button id="left" on:click={rotateLeft}>
    <slot name="left-control">
      <svg width="39px" height="110px" id="svg8" transform={`scale(${controlScale})`}>
        <g id="layer1" transform="translate(-65.605611,-95.36949)">
          <path
          style={`fill:none;stroke:${controlColor};stroke-width:9.865;stroke-linecap:round;stroke-linejoin:bevel;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1`}
          d="m 99.785711,100.30199 -23.346628,37.07648 c -7.853858,12.81098 -7.88205,12.81098 0,24.78902 l 23.346628,37.94647"
          id="path1412" />
        </g>
      </svg>
    </slot>
  </button>
  <button id="right" on:click={rotateRight}>
    <slot name="right-control">
      <svg width="39px" height="110px" id="svg8" transform={`rotate(180) scale(${controlScale})`}>
        <g id="layer1" transform="translate(-65.605611,-95.36949)">
          <path
          style={`fill:none;stroke:${controlColor};stroke-width:9.865;stroke-linecap:round;stroke-linejoin:bevel;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1`}
          d="m 99.785711,100.30199 -23.346628,37.07648 c -7.853858,12.81098 -7.88205,12.81098 0,24.78902 l 23.346628,37.94647"
          id="path1412" />
        </g>
      </svg>
    </slot>
</div>

<style>
  #carousel-container {
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    overflow-x: hidden;
  }
  #carousel-images {
    display: flex;
    //justify-content: center;
    flex-wrap: nowrap;
   
  }
  .coursel-img {
    background-size: cover;
    background-repeat: no-repeat;
    height: 600px;
  }
  button {
   position: absolute;
   top: 50%;
   transform: translateY(-50%);
   display: flex;
   align-items: center;
   justify-content: center;
   background: transparent;
   border: none;
 }

 button:focus {
   outline: auto;
 }

  #left {
    left: 10px;
  }

  #right {
    right: 10px;
  }
img, video {
  max-width: none !important;
}
.carousel-caption {
  color: #000;
}
</style>