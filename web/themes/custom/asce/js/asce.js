(function ($, Drupal, drupalSettings) {

  jQuery('.block-title').on('click', function(e) {
      //jQuery(this).find('a').removeAttr('href');
      e.preventDefault();
      if (jQuery(this).closest('section').find('.sidebar').hasClass('open')) {
        jQuery(this).removeClass('open');
      jQuery(this).closest('section').find('.sidebar').slideUp();
      jQuery(this).closest('section').find('.sidebar').removeClass('open');
    } else {
      //jQuery('section .sidebar').removeClass('open');
      jQuery(this).addClass('open');
      jQuery(this).closest('section').find('.sidebar').slideDown();
      jQuery(this).closest('section').find('.sidebar').addClass('open');
    }
      //jQuery(this).closest('section').find('.sidebar').toggleClass('open');
  });

  jQuery('.row-title').on('click', function(e) {
    jQuery(this).removeAttr('href');
    //jQuery('.item-list ul').removeClass('open');
    //var element = jQuery(this).closest('.item-list').find('ul');
    jQuery(this).toggleClass('open');
    if (jQuery(this).closest('.item-list').find('ul').hasClass('open')) {
      jQuery(this).removeClass('open');
      jQuery(this).closest('.item-list').find('ul').slideUp();
      jQuery(this).closest('.item-list').find('ul').removeClass('open');
    } else {
      jQuery('.row-title').removeClass('open');
      jQuery(this).addClass('open');
      jQuery('.item-list ul').slideUp();
      jQuery('.item-list ul').removeClass('open');
      jQuery(this).closest('.item-list').find('ul').slideDown();
      jQuery(this).closest('.item-list').find('ul').addClass('open');
    }
  });
jQuery('.acc-pge .tbl').slideUp();
jQuery('.para-set > .field--item:first-child .acc-cnt > .field--item:first-child > .paragraph').addClass('open');
jQuery('.para-set > .field--item:first-child .acc-cnt > .field--item:first-child > .paragraph.open .tbl').slideDown();
  jQuery('.acc-pge .acc-title').on('click', function(e) {
    if(jQuery(this).parent().hasClass('open')) {
      jQuery(this).next().slideDown();
    } else {
      jQuery('.acc-pge .tbl').slideUp();
      jQuery('.paragraph').removeClass('open');
      jQuery(this).next().slideDown();
      jQuery(this).parent().addClass('open');
    }
  });


  /*jQuery('.cnt-title').on('click', function(e) {
    jQuery(this).closest('ul').addClass('open');
    jQuery(this).closest('section').find('.sidebar').addClass('open');
  });*/

  var current = window.location.pathname;
  jQuery('.cnt-title a').each(function(){
      var link = jQuery(this).attr('href');
      if (current == link){
        jQuery(this).parent().parent().addClass('is_active');
        jQuery(this).closest('ul').addClass('open');
        jQuery(this).closest('.item-list').find('.row-title').addClass('open');
        jQuery(this).closest('section').find('.sidebar').addClass('open');
        jQuery(this).closest('section').find('.block-title').addClass('open');
      }
   }); 

})(jQuery, Drupal, drupalSettings);