<script lang="ts" context="module">
    import type { Load } from '@sveltejs/kit';
    import CarouselTest from './components/Carousel-test.svelte';
    import { ChevronLeftIcon, ChevronRightIcon } from 'svelte-feather-icons';
    export const load: Load = async ({ fetch }) => {	
        const res  =  await fetch(`http://localhost:1337/api/carousel?populate=*`).then(res => res.json());		
        console.log(res.data.attributes.Carousel);
        return { props: { posts: res.data.attributes.Carousel } };
        };
  </script>
   <script lang="ts">
       import type { post } from '$lib/types';
       import { identity } from 'svelte/internal';
       
       export let posts: post[];
       let images = posts;

</script>
  <CarouselTest
    {images}
>
  <span slot="left-control"><ChevronLeftIcon size="100" /></span>
  <span slot="right-control"><ChevronRightIcon size="100" /></span>
</CarouselTest>

<style>

</style>
