<script>
  export let onClick = null; // TODO fix keypress
  export let selected = false;
  export let pageClassName = "";
  export let pageLinkClassName = "";
  export let activeClassName = "";
  export let activeLinkClassName = "";
  export let extraAriaContext = "";
  export let href = "";
  export let ariaLabel = "";
  export let page = 0;

  let defaults = {
    pageClassName,
    pageLinkClassName,
    activeClassName,
    activeLinkClassName
  };

  $: ariaLabel =
    ariaLabel ||
    "Page " + page + (extraAriaContext ? " " + extraAriaContext : "");

  let ariaCurrent = null;

  $: if (selected) {
    ariaCurrent = "page";
    ariaLabel = ariaLabel || "Page " + page + " is your current page";

    if (typeof pageClassName !== "undefined") {
      pageClassName = pageClassName + " " + activeClassName;
    } else {
      pageClassName = activeClassName;
    }

    if (typeof pageLinkClassName !== "undefined") {
      if (typeof activeLinkClassName !== "undefined") {
        pageLinkClassName = pageLinkClassName + " " + activeLinkClassName;
      }
    } else {
      pageLinkClassName = activeLinkClassName;
    }
  }

  $: if (!selected) {
    pageLinkClassName = defaults.pageLinkClassName;
    pageClassName = defaults.pageClassName;
    activeClassName = defaults.activeClassName;
    activeLinkClassName = defaults.activeLinkClassName;
  }
</script>

<style>
  li {
    display: inline-block;
  }
</style>

<li class={pageClassName}>
  <a
    on:click
    role="button"
    class={pageLinkClassName}
    {href}
    tabIndex="0"
    aria-label={ariaLabel}
    aria-current={ariaCurrent}
    on:keypress={onClick}>
    {page}
  </a>
</li>
