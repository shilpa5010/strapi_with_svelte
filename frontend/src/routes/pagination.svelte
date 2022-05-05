<!-- src/routes/index.svelte -->
    <script lang="ts" context="module">
        import type { Load } from '@sveltejs/kit';
		//import { onMount } from "svelte";
        
		
			let rows = [];
			let page = 0;
			let totalPages = [];
			let currentPageRows = [];
			let itemsPerPage = 2;
			let loading = true;
			
			console.log("Total Pages",totalPages.length);
			$: currentPageRows = totalPages.length > 0 ? [page] : [];
			$: console.log("Page is", page);
			

			const paginate = (items) => {
			//console.log(items);
			const pages = Math.ceil(items.length / itemsPerPage);
			$: console.log("Pages is", pages);
			
			
			const paginatedItems = Array.from({ length: pages }, (_, index) => {
			const start = index * itemsPerPage;
			return items.slice(start, start + itemsPerPage);
			});

			console.log("paginatedItems are", paginatedItems);
			totalPages = [...paginatedItems];
			console.log("totalPages are", totalPages);
			return paginatedItems;
			};
	
			const setPage = (p) => {
				if (p >= 0 && p < totalPages.length) {
					page = p;
				}
			}
		
		
		export const load: Load = async ({ fetch }) => {
           const res  =  await fetch(`http://localhost:1337/api/posts?populate=*`).then(res => res.json());
			//console.log(paginate(res.data)+"hkjgkgkjgkjgkjg");	
			
            return { props: { posts: paginate(res.data) }};
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
{console.log(currentPageRows)}
{#each posts as post}
{console.log("heyyyyyyyyyyyy2")}
this code helps in debugging
{console.log("heyyyyyyyyyyyy3")}


 {/each}
 <nav class="pagination">
  <ul>
    <li>
      <button
        type="button"
        class="btn-next-prev"
        on:click={() => setPage(page - 1)}
      >
				PREV
      </button>
    </li>

    {#each totalPages as page, i}
      <li>
        <button
					type="button"
					class="btn-page-number"
					on:click={() => setPage(i)}
				>
					{i + 1}
				</button>
      </li>
    {/each}

    <li>
      <button
        type="button"
        class="btn-next-prev"
        on:click={() => setPage(page + 1)}
      >
				NEXT
      </button>
    </li>
  </ul>
</nav>
</div>
</div>



