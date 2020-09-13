<script>
  import PageView from "./PageView.svelte";
  import BreakView from "./BreakView.svelte";
  import { createEventDispatcher } from "svelte";
  export let pageCount = 10;
  export let pageRangeDisplayed = 2;
  export let marginPagesDisplayed = 3;
  export let previousLabel = "Previous";
  export let nextLabel = "Next";
  export let breakLabel = "...";
  export let hrefBuilder;
  export let initialPage;
  export let forcePage;
  export let disableInitialCallback = false;
  export let containerClassName;
  export let pageClassName;
  export let pageLinkClassName;
  export let activeClassName = "selected";
  export let activeLinkClassName;
  export let previousClassName = "previous";
  export let nextClassName = "next";
  export let previousLinkClassName;
  export let nextLinkClassName;
  export let disabledClassName = "disabled";
  export let breakClassName;
  export let breakLinkClassName;
  export let extraAriaContext;
  export let ariaLabelBuilder;
  export let startPageIndex = 1;

  const dispatch = createEventDispatcher();

  // initial state setup
  let initialSelected;
  if (initialPage) {
    initialSelected = initialPage;
  } else if (forcePage) {
    initialSelected = forcePage;
  } else {
    initialSelected = 1;
  }

  let state = {
    selected: initialSelected
  };

  function handlePreviousPage(evt) {
    const { selected } = state;
    evt.preventDefault ? evt.preventDefault() : (evt.returnValue = false);
    if (selected > 0) {
      handlePageSelected(selected - 1, evt);
    }
  }

  function handleNextPage(evt) {
    const { selected } = state;

    evt.preventDefault ? evt.preventDefault() : (evt.returnValue = false);
    if (selected < pageCount - 1) {
      handlePageSelected(selected + 1, evt);
    }
  }

  function handlePageSelected(selected, event) {
    event.preventDefault ? event.preventDefault() : (event.returnValue = false);
    if (state.selected === selected) return;

    state.selected = selected;

    // Call the callback with the new selected item:
    dispatch("change", {
      selected,
      event
    });
  }

  function getForwardJump() {
    const { selected } = state;

    const forwardJump = selected + pageRangeDisplayed;
    return forwardJump >= pageCount ? pageCount - 1 : forwardJump;
  }

  function getBackwardJump() {
    const { selected } = state;

    const backwardJump = selected - pageRangeDisplayed;
    return backwardJump < 0 ? 0 : backwardJump;
  }

  function handleBreakClick(index, evt) {
    evt.preventDefault ? evt.preventDefault() : (evt.returnValue = false);

    const { selected } = state;

    handlePageSelected(
      selected < index ? getForwardJump() : getBackwardJump(),
      evt
    );
  }

  function hrefBuilderMain(pageIndex) {
    if (
      hrefBuilder &&
      pageIndex !== state.selected &&
      pageIndex >= startPageIndex &&
      pageIndex < pageCount
    ) {
      return hrefBuilder(pageIndex + 1);
    }
  }

  function ariaLabelBuilderMain(pageIndex) {
    const selected = pageIndex === state.selected;
    if (ariaLabelBuilder && pageIndex >= 0 && pageIndex < pageCount) {
      let label = ariaLabelBuilder(pageIndex + 1, selected);
      // DEPRECATED: The extraAriaContext prop was used to add additional context
      // to the aria-label. Users should now use the ariaLabelBuilder instead.
      if (extraAriaContext && !selected) {
        label = label + " " + extraAriaContext;
      }
      return label;
    }
  }

  // function getPageElement(index) {
  //   const { selected } = state;

  //   return (
  //     <PageView
  //       key={index}
  //       on:click={this.handlePageSelected.bind(null, index)}
  //       selected={selected === index}
  //       pageClassName={pageClassName}
  //       pageLinkClassName={pageLinkClassName}
  //       activeClassName={activeClassName}
  //       activeLinkClassName={activeLinkClassName}
  //       extraAriaContext={extraAriaContext}
  //       href={this.hrefBuilderMain(index)}
  //       ariaLabel={this.ariaLabelBuilderMain(index)}
  //       page={index + 1}
  //     />
  //   );
  // }

  let previousClasses = "";
  let nextClasses = "";
  let previousAriaDisabled = "";
  let nextAriaDisabled = "";

  $: previousClasses =
    previousClassName +
    (state.selected === startPageIndex ? ` ${disabledClassName}` : "");
  $: nextClasses =
    nextClassName +
    (state.selected === pageCount - 1 ? ` ${disabledClassName}` : "");

  $: previousAriaDisabled =
    state.selected === startPageIndex ? "true" : "false";
  $: nextAriaDisabled = state.selected === pageCount - 1 ? "true" : "false";

  $: {
    const items = [];
    const { selected } = state;

    if (pageCount <= pageRangeDisplayed) {
      for (let index = startPageIndex; index < pageCount; index++) {
        items.push({
          itemIndex: index,
          type: "PageView"
        });
      }
    } else {
      let leftSide = pageRangeDisplayed / 2;
      let rightSide = pageRangeDisplayed - leftSide;

      // If the selected page index is on the default right side of the pagination,
      // we consider that the new right side is made up of it (= only one break element).
      // If the selected page index is on the default left side of the pagination,
      // we consider that the new left side is made up of it (= only one break element).
      if (selected > pageCount - pageRangeDisplayed / 2) {
        rightSide = pageCount - selected;
        leftSide = pageRangeDisplayed - rightSide;
      } else if (selected < pageRangeDisplayed / 2) {
        leftSide = selected;
        rightSide = pageRangeDisplayed - leftSide;
      }

      let index;
      let page;
      let breakView;

      for (index = startPageIndex; index < pageCount; index++) {
        page = index;

        // If the page index is lower than the margin defined,
        // the page has to be displayed on the left side of
        // the pagination.
        if (page <= marginPagesDisplayed) {
          //items.push(createPageView(index));
          items.push({
            itemIndex: index,
            type: "PageView"
          });
          continue;
        }

        // If the page index is greater than the page count
        // minus the margin defined, the page has to be
        // displayed on the right side of the pagination.
        if (page > pageCount - marginPagesDisplayed) {
          //items.push(createPageView(index));
          items.push({
            itemIndex: index,
            type: "PageView"
          });
          continue;
        }

        // If the page index is near the selected page index
        // and inside the defined range (pageRangeDisplayed)
        // we have to display it (it will create the center
        // part of the pagination).
        if (index >= selected - leftSide && index <= selected + rightSide) {
          //items.push(createPageView(index));
          items.push({
            itemIndex: index,
            type: "PageView"
          });
          continue;
        }

        // If the page index doesn't meet any of the conditions above,
        // we check if the last item of the current "items" array
        // is a break element. If not, we add a break element, else,
        // we do nothing (because we don't want to display the page).
        if (breakLabel && items[items.length - 1] !== breakView) {
          breakView =
            // <BreakView
            //   key={index}
            //   breakLabel={breakLabel}
            //   breakClassName={breakClassName}
            //   breakLinkClassName={breakLinkClassName}
            //   on:click={this.handleBreakClick.bind(null, index)}
            // />
            items.push({
              itemIndex: index,
              type: "BreakView"
            });
          items.push(breakView);
        }
      }
    }

    state.items = items;
  }
</script>

<style>
  ul {
    display: inline-block;
    padding-left: 15px;
    padding-right: 15px;
  }
  li {
    display: inline-block;
  }
</style>

<ul class={containerClassName}>
  <li class={previousClasses}>
    <a
      on:click={handlePreviousPage}
      class={previousLinkClassName}
      href={hrefBuilderMain(state.selected - 1)}
      tabIndex="0"
      role="button"
      on:keypress={handlePreviousPage}
      aria-disabled={previousAriaDisabled}>
      {previousLabel}
    </a>
  </li>

  {#each state.items as { itemIndex, type }, i}
    {#if type === 'PageView'}
      <svelte:component
        this={PageView}
        key={itemIndex}
        on:click={e => handlePageSelected(itemIndex, e)}
        selected={state.selected === itemIndex}
        {pageClassName}
        {pageLinkClassName}
        {activeClassName}
        {activeLinkClassName}
        {extraAriaContext}
        href={hrefBuilderMain(itemIndex)}
        ariaLabel={ariaLabelBuilderMain(itemIndex)}
        page={itemIndex} />
    {:else}
      <svelte:component
        this={BreakView}
        key={itemIndex}
        {breakLabel}
        {breakClassName}
        {breakLinkClassName}
        on:click={e => handleBreakClick(itemIndex, e)} />
    {/if}
  {/each}

  <li class={nextClasses}>
    <a
      on:click={handleNextPage}
      class={nextLinkClassName}
      href={hrefBuilderMain(state.selected + 1)}
      tabIndex="0"
      role="button"
      on:keypress={handleNextPage}
      aria-disabled={nextAriaDisabled}>
      {nextLabel}
    </a>
  </li>
</ul>
