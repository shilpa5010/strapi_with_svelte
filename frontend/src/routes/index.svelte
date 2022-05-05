<!-- src/routes/index.svelte -->
    <script lang="ts" context="module">
        import type { Load } from '@sveltejs/kit';
    
        export const load: Load = async ({ fetch }) => {
           // const res = await fetch('http://localhost:1337/api/posts');
			//console.log(res);
            //const responseVal = await res.json();
			//console.log(responseVal.attributes.id);
			//console.log(responseVal.dataattributes);
			const res  =  await fetch(`http://localhost:1337/api/posts?populate=*`).then(res => res.json());
			//console.log(res.data);
            return { props: { posts: res.data } };
        };
    </script>
    
    <script lang="ts">
        import type { Post } from '$lib/types';
		import { goto } from "$app/navigation"
    
        export let posts: Post[];
    </script>
    
    <div class="my-4">
        <h1 class="text-center text-3xl font-bold">My test blog</h1>
    </div>
       
<div class="container mx-auto mt-4">
<div class="grid gap-12 lg:grid-cols-3">

{#each posts as post}

<!---this code helps in debugging
{console.log("heyyyyyyyyyyyy")}
{console.log(post.attributes.image.data.attributes.url)}--->


<div class="max-w-sm rounded overflow-hidden shadow-lg float-left m-4 bg-white">
		<img class="w-full" src="http://localhost:1337{post.attributes.image.data.attributes.url}" alt="">
		<div class="px-6 py-4">
		<div class="font-bold text-xl mb-2 cursor-pointer" on:click={() => goto("/posts/" + post.id)}>{post.attributes.title}</div>
				<p class="text-gray-700 text-base">{(post.attributes.description).substr(0,180)}  >> <a href="" class="text-blue-700" on:click={() => goto("/posts/" + post.id)}>Read More</a></p>
		</div>
		<div class="px-6 pt-4 pb-2">
			<span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#claranet</span>
			<span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#IT</span>
			<span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Blog</span>
		</div>
		</div>

 {/each}
 
</div>
</div>



