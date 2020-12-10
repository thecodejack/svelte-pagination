<script>
  import Pagination from "./../../src";

  let checkedValue = 1;

  function handleChange(e) {
    const { selected } = e.detail;
    checkedValue = selected;
  }
</script>

<h1>Simple usage</h1>
<Pagination
  pageCount={100}
  marginPagesDisplayed={2}
  pageRangeDisplayed={5}
  on:change={handleChange} />
<br />
