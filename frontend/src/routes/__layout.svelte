<!----
Now here, in this __layout.svelte file, we can add whatever content we want, and it'll be displayed on all pages. So, add your Navbars, Headers, Footers, and everything else here.
--->
<script lang="ts">
	import Navigation from '/src/routes/components/Navigation.svelte';
	import '../app.css';
	import '../app.postcss';
</script>

<Navigation />

<slot />
