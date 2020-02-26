# jQuery-SameHeight

This script allows you to create equals height columns.

## Demo

https://codepen.io/ArtZ91/pen/moJOex

## How to use

Add class `.same-height-group` to wrapper of elements (row).

Add class `.same-height` to each element (columns).

Add class `.same-height-group-heading` to wrapper of heading elements (row).

Add class `.same-height-heading` to each heading elements (h1, h2, h3...).

Use method `sameHeight` to update height of elements.

```js
sameHeight();
```

To update height on window resize use `resize` event:

```js
window.addEventListener('resize', function(){
    sameHeight();
}, true);
```

## Example

```html
<div class="row same-height-group">
  <div class="col same-height">
    <p>First column</p>
  </div>
  <div class="col same-height">
    <p>Second column<p>
    <p>Second column<p>
  </div>
  <div class="col same-height">
    <p>Third column</p>
    <p>Third column</p>
    <p>Third column</p>
  </div>
</div>

<script>
    jQuery(function(){
        sameHeight();
    
        window.addEventListener('resize', function(){
            sameHeight();
        }, true);
    });
</script>
```
