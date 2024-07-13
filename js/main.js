jQuery(document).ready(function($){

    /* SELL YOUR CARR js*/
    
      // Show the first tab and hide the rest
  jQuery('#tabs-nav li:first-child').addClass('active');
  jQuery('.tab-content').hide();
  jQuery('.tab-content:first').show();

  // Click function
  jQuery('#tabs-nav li').click(function(){
    jQuery('#tabs-nav li').removeClass('active');
    jQuery(this).addClass('active');
    jQuery('.tab-content').hide();
    
    var activeTab = $(this).find('a').attr('href');
    jQuery(activeTab).fadeIn();
    return false;
  });

    

    

});