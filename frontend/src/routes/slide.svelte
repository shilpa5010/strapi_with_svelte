<script>
    import Carousel from './components/Carousel.svelte';
    import { ChevronLeftIcon, ChevronRightIcon } from 'svelte-feather-icons';
    const images = [
        {href: 'http://localhost:1337/uploads/carousel-1.jpg', id: 'image1'},
        {href: 'http://localhost:1337/uploads/carousel-2.jpg', id: 'image2'},
        {href: 'http://localhost:1337/uploads/carousel-3.jpg', id: 'image3'},
        {href: 'http://localhost:1337/uploads/carousel-4.jpg', id: 'image4'},
        {href: 'http://localhost:1337/uploads/carousel-5.jpg', id: 'image5'},
        {href: 'http://localhost:1337/uploads/carousel-6.jpg', id: 'image6'},
    ]
  </script>
  
<Carousel
    {images}
    imageWidth={1350}
    imageSpacing={380}
  
>
  <span slot="left-control"><ChevronLeftIcon size="100" /></span>
  <span slot="right-control"><ChevronRightIcon size="100" /></span>
</Carousel>

<style>

</style>