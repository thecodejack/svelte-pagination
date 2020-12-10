<script>
  import Pagination from "./../../src";

  let checkedValue = 1;

  function handleChange(e) {
    const { selected } = e.detail;
    checkedValue = selected;
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

  /* Second component styling */
  :global(ul.pagination2) {
    background: #51bae8;
    padding: 5px;
  }

  :global(ul.pagination2 .previous) {
    font-weight: bold;
    border-right: 2px solid #2d91cc;
  }

  :global(ul.pagination2 .next) {
    font-weight: bold;
    border-left: 2px solid #2d91cc;
  }

  :global(ul.pagination2 li) {
    padding: 25px;
  }

  :global(ul.pagination2 li.active) {
    border-radius: 50%;
    border: 1px solid #2d91cc;
  }
</style>

<h1>Custom Styles</h1>
<Pagination
  previousLabel={'previous'}
  nextLabel={'next'}
  breakLabel={'...'}
  breakClassName={'break-me'}
  initialPage={checkedValue}
  pageCount={100}
  marginPagesDisplayed={2}
  pageRangeDisplayed={5}
  on:change={handleChange}
  containerClassName={'pagination'}
  subContainerClassName={'pages'}
  activeClassName={'active'} />
<br />
<br />
<br />
<br />
<br />
<Pagination
  previousLabel={'<'}
  nextLabel={'>'}
  breakLabel={'...'}
  breakClassName={'break-me'}
  initialPage={checkedValue}
  pageCount={100}
  marginPagesDisplayed={2}
  pageRangeDisplayed={5}
  on:change={handleChange}
  containerClassName={'pagination2'}
  subContainerClassName={'pages'}
  activeClassName={'active'} />
