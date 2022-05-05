<!-- src/routes/components/Navigation.svelte -->
		<script lang="ts" context="module">
        import type { Load } from '@sveltejs/kit';
		async function getLinks() {		
       		const res  =  await fetch(`http://localhost:1337/api/main-menu?populate=*`).then(res => res.json());
			//console.log(res.data.attributes.links);
            return   res.data.attributes.links  ;
        };
		  const allLinksPromise = getLinks();
		</script>		
		
	
	<!--<nav class="flex justify-center space-x-4 sticky top-0">
	
	{#await allLinksPromise then links}
    {#each links as link}
	
	<a
		href="{link.href}"
		class="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900"
		>{link.label}</a>
	{/each}
	{/await}
</nav>
-->
<nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800 fixed top-0 flex justify-center space-x-4 w-full">
	<div class="container flex flex-wrap justify-between items-center mx-auto">
	<a href="https://flowbite.com" class="flex items-center">		
		<span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Examples!!</span>
	</a>
	<div class="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="mobile-menu-2">
	  <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
		{#await allLinksPromise then links}
		{#each links as link}
			<li>
				<a href="{link.href}" class="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900 block " aria-current="page">{link.label}</a>
			  </li>
		{/each}
		{/await}		
	  </ul>
	</div>
	</div>
  </nav>