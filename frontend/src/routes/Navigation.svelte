<!-- src/routes/Navigation.svelte -->
    <script lang="ts" context="module">
        import type { Load } from '@sveltejs/kit';
		console.log("dsfds");
		export const load: Load = async ({ fetch }) => {
		console.log("dsfds12");
       		const res  =  await fetch(`http://localhost:1337/api/posts?populate=*`).then(res => res.json());
			console.log("dsfds123");
            //return { props: { posts: res.data } };
        };
		</script>
		
		<script lang="ts">
        import type { Post } from '$lib/types';
		import { goto } from "$app/navigation"
    
        export let posts: Post[];
    </script>
	<nav class="flex justify-center space-x-4">
	<a
		href="/"
		class="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900"
		>Home</a
	>
	<a
		href="/about"
		class="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900"
		>About</a
	>
	<a
		href="/pagination"
		class="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900"
		>Pagination Example</a
	>
	<a
		href="/service-page"
		class="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900"
		>Service Page test</a
	>
</nav>