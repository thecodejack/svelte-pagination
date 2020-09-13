<script>
  import Pagination from "./../../src";

  let checkedValue = true;

  function handleChange(e) {
    const { checked } = e.detail;
    checkedValue = checked;
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
</style>

<h1>Simple usage</h1>
<Pagination
  previousLabel={'previous'}
  nextLabel={'next'}
  breakLabel={'...'}
  breakClassName={'break-me'}
  pageCount={100}
  marginPagesDisplayed={2}
  pageRangeDisplayed={5}
  onPageChange={handleChange}
  containerClassName={'pagination'}
  subContainerClassName={'pages'}
  activeClassName={'active'} />
