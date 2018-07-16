$(function() {
  $( '.facetapi-facets .leaf > .facetapi-active' ).parent().addClass( 'facetapi-item-active' );

  $( '.facetapi-facets' ).on( 'click touchend', '.leaf > a', function( e ) {
    // e.target
    // e.currentTarget
    var $this = $( e.currentTarget ); // current clicked element
    var $itemList = $( '.facetapi-facets .item-list' ); // div.item-list element

    // if $this .hasClass facetapi-active is true..
    if ($this.hasClass('facetapi-active')) {
      e.preventDefault();
    // .toggleClass on the $( '.facetapi-facets .item-list' ) to .show-filters
      $itemList.toggleClass( 'show-filters' );
    }
    // else
    // remove the active class (from a, and it's parent li)
    //else {
      //$itemList.removeClass( 'facetapi-active');
      // ** OR ..
      // $('a').parent().removeClass('facetapi-active')


  //  };

    // if $this .hasClass facetapi-active is false..
    if (!$this.hasClass('facetapi-active')) {
      e.preventDefault();
      // find element with .facetapi-active .removeClass .facetapi-active on its parent .removeClass .facetapi-item-active
      $('.facetapi-active').parent().removeClass('.facetapi-item-active'); /// ** here using jQuery, do I need to provide a 'context' parameter ?
      // $this addClass .facetapi-active and to parent li addClass .facetapi-item-active
      $this.addClass('.facetapi-active').parent().addClass('.facetapi-item-active');
      // .toggleClass on the .facetapi-facets .item-list to .show-filters
      $itemList.toggleClass( 'show-filters' );
    }

  });
});
