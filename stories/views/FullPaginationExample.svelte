<script>
  import Pagination from "./../../src";

  let selectedValue = 1;

  function handleChange(e) {
    const { selected } = e.detail;
    selectedValue = selected;
  }
</script>

<style>
  /*
    You can add following styles in a global stylesheets
  */
  :global(ul.pagination) {
    background: aliceblue;
    padding: 10px;
  }

  :global(ul.pagination li) {
    padding: 5px;
  }

  :global(ul.pagination li.active) {
    border: 1px solid;
  }

  .page {
    height: 300px;
    width: 300px;
    background-color: azure;
    border: 1px;
    text-align: center;
  }
</style>

<h1>Full Pagination Example</h1>
<div class="page">
  <h3>You are in Page No. {selectedValue}</h3>
</div>
<Pagination
  previousLabel={'previous'}
  nextLabel={'next'}
  breakLabel={'...'}
  breakClassName={'break-me'}
  pageCount={100}
  marginPagesDisplayed={2}
  pageRangeDisplayed={5}
  on:change={handleChange}
  containerClassName={'pagination'}
  subContainerClassName={'pages'}
  activeClassName={'active'} />
