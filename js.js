// **Remember**:
  // The JS is just toggling presentation attributes (i.e. causing state changes to DOM)
  // The CSS is handling what happens when these presentation attributes are toggling

// Workflow 1 - User Clicks the Active Filter ('facetapi-active')
  // The user is already on the active filter ('facetapi-active')
    // This means they are seeing the content of the active filter ('facetapi-active')
    // No need to hyper link the user back to the active filter page they are on
  // They do, however, have filter options and need a way to see those filters
    // This means clicking the active filter ('facetapi-active') can be used as the means of exposing the other page filters (show-filters ?)
  // Clicking the active filter again should be used to hide visible filters.

// Workflow 2 - User Has Exposed All Filters and Wants to Link to a Filter Page
  // Now the user can see all of their options
  // Clicking any of the non-active filters should allow the browser to link to that filter page
  // Since the user made a filter selection, 
    // hide the other filters
    // and make sure the previous active filter no longer has the active state
    // and set the active filter state on the filter option the user selected.

$(function() {
  $( '.facetapi-facets .leaf > .facetapi-active' ).parent().addClass( 'facetapi-item-active' );

  $( '.facetapi-facets' ).on( 'click touchend', '.leaf > a', function( e ) {
    // Save the clicked element as a jQuery obj variable
    var $this = $( e.currentTarget ); // Currently clicked element
    var $itemList = $( '.facetapi-facets .item-list' ); // div.item-list element

    // If $this .hasClass active filter ('facetapi-active')
    if ( $this.hasClass( 'facetapi-active' ) ) {
      // User seeing content of active filter
      // User already on page -- No need to hyper link back to active filter page
      e.preventDefault();

      // User needs a way to see other filter options
      // Clicking the current active filter ('facetapi-active')
          // Exposes the other page filters ('show-filters')

     // Show or hide other filters: .toggleClass on the $('.facetapi-facets .item-list') to ('show-filters')
     $itemList.toggleClass( 'show-filters' );


    // If it is not the active filter ('facetapi-active')
  } else {
      e.preventDefault();
    // Set new active filter and hyper link to filtered page      // TO DO: hyperlink to selected link ****
    var $active = $('.facetapi-active'); // or $('.facetapi-active .show-filters') ?
    $active.removeClass('facetapi-active').parent().removeClass( 'facetapi-item-active' );
    $this.addClass('facetapi-active').parent().addClass('facetapi-item-active');
    $itemList.removeClass('show-filters');
    //.parent().removeClass( 'show-filters' );
    //$itemList.removeClass('show-filters');
  };

  });
});


// In livestrong.js (at bottom):
/* Write you JS below this comment in the closure */
(function( $ ) {
	Drupal.behaviors.FacetFilters = {
		attach: function( context, settings ) {
			/* Write here. */
			//$( '.mySelector', context );

			// Access media queries ?
			// Assign them to show their CSS properties at their respective breakpoints ?
			var mqSmall = window.matchMedia( "(max-width: 767px)" ); // Mobile

// matches property returns true or false depending in the query result ?
			if (mq.matches) {
				// window width is at least 767px
			} else {
				// window width is less than 767px
			}

		}
	}
})( jQuery );
