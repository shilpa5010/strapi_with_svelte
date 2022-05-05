<!-- src/routes/posts/[slug].svelte -->
    <script lang="ts" context="module">
        import type { Load } from '@sveltejs/kit';
    
        export async function load({params}){
            // The params object will contain all of the parameters in the route.
			console.log(params);
            const { slug } = params;
    
            // Now, we'll fetch the blog post from Strapi
            const res = await fetch('http://localhost:1337/api/posts/' + slug + '?populate=*');
            // A 404 status means "NOT FOUND"
            if (res.status === 404) {
                // We can create a custom error and return it.
                // SvelteKit will automatically show us an error page that we'll learn to customise later on.
                const error = new Error(`The post with ID ${slug} was not found`);
                return { status: 404, error };
            } else {
                const data = await res.json();
				console.log(data);
                return { props: { post: data.data } };
            }
        };
    </script>
    
    <script lang="ts">
        import type { Post } from '$lib/types';
        import { onMount } from 'svelte';
    
        export let post: Post;
        let content = post.attributes.content;
   
        onMount(async () => {
            // Install the marked package first!
            // Run this command: npm i marked
    
            // We're using this style of importing because "marked" uses require, which won't work when we import it with SvelteKit.
            // Check the "How do I use a client-side only library" in the FAQ: https://kit.svelte.dev/faq
            const marked = (await import('marked')).default;
            content = marked(post.attributes.content);
        });
    </script>
    
    <h1 class="text-center text-4xl mt-4">{post.attributes.title}</h1>
  
    
    <div class="border border-gray-500 my-4 mx-8 p-6 rounded">
	<div class="grid gap-4 lg:grid-cols-8">
	<div><img class="w-60" src="http://localhost:1337{post.attributes.image.data.attributes.url}" alt=""></div>
     <div class="float-left">   {@html content}</div>
	</div>	
    </div>