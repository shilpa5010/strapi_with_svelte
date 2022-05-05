<script lang="ts" context="module">
  import type { Load } from '@sveltejs/kit';
  import CarouselImg from './components/Carousel-images.svelte';
  import { ChevronLeftIcon, ChevronRightIcon } from 'svelte-feather-icons';
  export const load: Load = async ({ fetch }) => {
  //const res  =  await fetch(`http://localhost:1337/api/main-menu?populate=[links][fields][0]=id&populate[links][fields][1]=href`).then(res => res.json());
      const res  =  await fetch(`http://localhost:1337/api/service-page?populate[banner][populate][0]=banner_images`).then(res => res.json());
  
      const r = [];
      const arr = res.data.attributes.banner;
      console.log(arr);
      arr.forEach((item) => {
          //console.log(item.banner_images.data[0]['attributes']['url']);
          const bannerImage = "http://localhost:1337" + item.banner_images.data[0]['attributes']['url'];
          r.push({ id: item.id , href:bannerImage});

      });
      console.log(r);
      return { props: { posts: r } };
      };
</script>
 <script lang="ts">
     import type { post } from '$lib/types';
import { identity } from 'svelte/internal';
     
     export let posts: post[];
     let images = posts;

</script>

<CarouselImg
  {images}
  imageWidth={1903}
  imageSpacing={120}

>
<span slot="left-control"><ChevronLeftIcon size="100" /></span>
<span slot="right-control"><ChevronRightIcon size="100" /></span>
</CarouselImg>

<style>

</style>