<script>
  import Pagination from "./../../src";

  let checkedValue = true;

  function handleChange(e) {
    const { checked } = e.detail;
    checkedValue = checked;
  }
</script>

<h1>Simple usage</h1>
<Pagination
  pageCount={100}
  marginPagesDisplayed={2}
  pageRangeDisplayed={5}
  onPageChange={handleChange} />
<br />
