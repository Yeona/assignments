var el     = document.querySelectorAll('#title')[0];
var parent = el.parentNode; // This will grab the immediate parent element of `el`
//var height = getComputedStyle(el).getPropertyValue('height')
//console.log(el);
//console.log(parent);

//JS
//el.style.display ='none';

//el.style.display ='block';
//el.style.borderColor ='red';
//el.style.borderWidth ='1px';
//el.style.borderStyle ='solid';
//el.style.border = '1px solid red';

//console.log(border);
var className = 'my-new-class';
// IE 10
if (el.classList){
  el.classList.add(className);
} else {
// IE 8+
  el.className += ' ' + className;
}
consol.log(el);
