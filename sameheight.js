function sameHeight() {
  var i, j, headings, blocks, items;
  
  headings = document.getElementsByClassName('same-height-group-heading');
  blocks = document.getElementsByClassName('same-height-group');
  
  for (i = 0; i < headings.length; i++) {
    items = headings[i].getElementsByClassName("same-height-heading");
    var maxHeight = 0;
    for (j = 0; j < items.length; j++) {
        items[j].style.height = 'auto';
        if(items[j].clientHeight > maxHeight){
          maxHeight = items[j].clientHeight + 'px';
        }
    }
    for (j = 0; j < items.length; j++) {
      items[j].style.height = maxHeight;
    }
  }
  for (i = 0; i < blocks.length; i++) {
    items = blocks[i].getElementsByClassName("same-height");
    var maxHeight = 0;
    for (j = 0; j < items.length; j++) {
        items[j].style.height = 'auto';
        if(items[j].clientHeight > maxHeight){
          maxHeight = items[j].clientHeight;
        }
    }
    for (j = 0; j < items.length; j++) {
      items[j].style.height = maxHeight + 'px';
    }
  }
}
