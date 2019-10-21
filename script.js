$(function() {
  // add an item with item name equals to the input text
  $('#js-shopping-list-form').submit(function(event) {
    event.preventDefault();
    const item = $(this).find('input[name="shopping-list-entry"]').val();
    
    $('.shopping-list').append('<li><span class="shopping-item">' + item + '</span><div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button><button class="shopping-item-delete"><span class="button-label">delete</span></button></div></li>');
  });

  // when clicking "check", add or remove the line-through style on 
  // the item name
  $('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
    $(this).closest('li').children('.shopping-item').toggleClass('shopping-item__checked');
  });

  // when clicking "delete", delete the item
  $('.shopping-list').on('click', '.shopping-item-delete', function(event) {
    $(this).closest('li').remove();
  });

});
