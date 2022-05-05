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
			//console.log(res);
            return { props: { posts: res.data } };
        };
    </script>
    
    <script lang="ts">
        import type { Post } from '$lib/types';
		import { goto } from "$app/navigation"
    
        export let posts: Post[];
    </script>
    
    <div class="my-4">
        <h1 class="text-center text-3xl font-bold">About us Page</h1>
    </div>
       
<div class="container mx-auto mt-4">
<div class="grid gap-12 lg:grid-cols-3">

{#each posts as post}

<!---this code helps in debugging
{console.log("heyyyyyyyyyyyy")}
{console.log(post.attributes.image.data.attributes.url)}--->
   <div class="p-1 rounded-xl group sm:flex space-x-6 bg-white bg-opacity-50 shadow-xl hover:rounded-2xl">
          <img src="http://localhost:1337/uploads/Train_to_suit_you.png" alt="art cover" loading="lazy" width="1000" height="667" class="h-56 sm:h-full w-full sm:w-5/12 object-cover object-top rounded-lg transition duration-500 group-hover:rounded-xl">
          <div class="sm:w-7/12 pl-0 p-5">
            <div class="space-y-2">
              <div class="space-y-4">
                <h4 class="text-2xl font-semibold text-cyan-900"><a href="" on:click={() => goto("/posts/" + post.id)}>{post.attributes.title}</a></h4>
                <p class="text-gray-600">{(post.attributes.description).substr(0,180)}...</p>
              </div>
              <a href="" on:click={() => goto("/posts/" + post.id)} class="block w-max text-cyan-600">Read more</a>
            </div>
			<div class="px-6 pt-4 pb-2">
			<span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#claranet</span>
			<span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#IT</span>
			<span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Blog</span>
		</div>
          </div>
        </div>

 {/each}
 
</div>
</div>



