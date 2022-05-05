<script>

  import { onMount } from "svelte";

  let rows = [];
  let page = 0;
  let totalPages = [];
  let currentPageRows = [];
  let itemsPerPage = 2;
  let loading = true;
	
	$: currentPageRows = totalPages.length > 0 ? totalPages[page] : [];
	$: console.log("Page is", currentPageRows);

  const paginate = (items) => {
    const pages = Math.ceil(items.length / itemsPerPage);
	$: console.log("Pages is", pages);

    const paginatedItems = Array.from({ length: pages }, (_, index) => {
      const start = index * itemsPerPage;
      return items.slice(start, start + itemsPerPage);
    });

    console.log("paginatedItems are", paginatedItems);
    totalPages = [...paginatedItems];
	console.log("totalPages are", totalPages);
  };

  onMount(() => {
		rows = Array.from({ length: 22 }, (_, i) => `item${i}`);
		paginate(rows);
  });
	
	const setPage = (p) => {
		if (p >= 0 && p < totalPages.length) {
			page = p;
		}
	}
</script>

<style>
	nav > ul {
		list-style-type: none;
		display: flex;
	}
</style>

<table class="table table-bordered table-striped table-hover">
{console.log(currentPageRows)}
  <tbody>
    {#each currentPageRows as row, i}
      <tr><td>{row}</td></tr>
    {:else}
      <tr>
        <td colspan="100%">
          <h5 class="text-center">There is no data to display here.</h5>
        </td>
      </tr>
    {/each}
  </tbody>
</table>
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