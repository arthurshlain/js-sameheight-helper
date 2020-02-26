function sameHeight() {
  var i, j, blocks, items;
  blocks = document.getElementsByClassName('same-height-group');
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
