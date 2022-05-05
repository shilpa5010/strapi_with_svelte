<script>
  import { flip } from 'svelte/animate';

  export let images;
  export let imageWidth = 300;
  export let imageSpacing = 20;
  export let speed = 100;
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

<div id="carousel-container " class="mt-36">
  <div id="carousel-images" class="m-24">
   
    {#each images as image (image.title)}
  
    <div class="max-w-md rounded overflow-hidden shadow-lg float-left m-4 bg-white coursel-img" id={image.id}>
      <div class="px-6 py-4 m">
          <div class="font-bold text-xl mb-2 cursor-pointer" on:click={() => goto(image.href)}>{image.title}</div>
          <p class="text-gray-700 text-base">{(image.description).substr(0,180)}  >></p>
      </div>
      </div>

    {/each}
   
  </div>
  <button id="left" on:click={rotateLeft}>
    <slot name="left-control">
      <svg width="39px" height="110px" id="svg8" transform={`scale(${controlScale})`}>
        <g id="layer1" transform="translate(-65.605611,-95.36949)">
          <path
          style={`fill:none;stroke:${controlColor};stroke-width:2.865;stroke-linecap:round;stroke-linejoin:bevel;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1`}
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
  .carousel-item {
  display: none;
  margin-right: -100%;
  backface-visibility: hidden;
  transition: transform .6s ease-in-out;
    transition-property: transform;
}
  .coursel-img {
    background-size: cover;
    background-repeat: no-repeat; 
  }
  button {
   position: absolute;
   top: 27%;
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
.m {
  //margin: 60px 80px;
}
</style>