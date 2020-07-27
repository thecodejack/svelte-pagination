<script>
  import Switch from "./../../src";

  let checkedValue = true;

  function handleChange(e) {
    const { checked } = e.detail;
    checkedValue = checked;
  }
</script>

<h1>Simple usage</h1>
<Switch
  previousLabel={'previous'}
  nextLabel={'next'}
  breakLabel={'...'}
  breakClassName={'break-me'}
  pageCount={100}
  marginPagesDisplayed={2}
  pageRangeDisplayed={5}
  onPageChange={handleChange}
  containerClassName={'pagination'}
  subContainerClassName={'pages pagination'}
  activeClassName={'active'} />
<br />
