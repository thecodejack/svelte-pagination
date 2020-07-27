<script>
  export let breakLabel = "";
  export let breakClassName = "";
  export let breakLinkClassName = "";
  export let onClick = null; // TODO fix keypress

  let className = "";

  $: className = breakClassName || "break";
</script>

<style>
  li {
    display: inline-block;
  }
</style>

<li class={className}>
  <a
    class={breakLinkClassName}
    on:click
    role="button"
    tabIndex="0"
    on:keypress={onClick}>
    {breakLabel}
  </a>
</li>
