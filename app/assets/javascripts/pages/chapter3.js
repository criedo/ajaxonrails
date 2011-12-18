$(function() {
  $('#time').data('type', 'html')
    .live('ajax:success', function(event, data) { var $this = $(this); $($this.data('replace')).html(data); $this.trigger('ajax:replaced'); })
    .bind('ajax:before', function() { $('#current_time').html('<font color=red>Loading...</font>'); })
    .bind('ajax:failure', function() { alert("Error: can't call Ajax!"); })
    .bind('ajax:success', function() { $('#counter').effect('pulsate', {color:"#777777"}, 300 ); })
    .bind('ajax:complete', function() { $('#counter').attr("style","font-weight: bold"); })
    .bind('ajax:replaced', function(event) { $('#counter').html($('#counter').html()+'<'); });
  $('#submit_reverse').data('type', 'html')
    .live('ajax:success', function(event, data) { $('#reversed').html(data); })
    .bind('ajax:failure', function() { alert("Error: can't call Ajax!"); })
});
