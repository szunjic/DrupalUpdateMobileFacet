$(function() {
  $( '.facetapi-facets .leaf > .facetapi-active' ).parent().addClass( 'facetapi-item-active' );

  $( '.facetapi-facets' ).on( 'click touchend', '.leaf > a', function( e ) {
    var $this = $( e.currentTarget ); // current clicked element
    // if $this .hasClass facetapi-active is true
    // prevent default
    // .toggleClass on the .facetapi-facets .item-list to .show-filters

    // if $this .hasClass facetapi-active is false
    // find element with .facetapi-active .removeClass .facetapi-active on its parent .removeClass .facetapi-item-active
    // $this addClass .facetapi-active and to parent li addClass .facetapi-item-active
    // .toggleClass on the .facetapi-facets .item-list to .show-filters

  });
});
