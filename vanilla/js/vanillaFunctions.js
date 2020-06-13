function vanillaFadeEffect(effect, element, speed) {
var A=0;
if(effect === 'fadeOut')
A=1;

if ( ! element.style.opacity) 
{ 
element.style.opacity = parseInt(A); 
}

var start = null;
window.requestAnimationFrame(function animate(timestamp) {
start = start || timestamp;
var progress = timestamp - start;

if(effect === 'fadeOut')
element.style.opacity = 1 - progress / speed;
else
element.style.opacity = progress / speed;

if (progress >= speed) {
if(effect === 'fadeOut')  {
  element.style.display = 'none';
}
else
{
  element.style.display = '';
}

} else {
window.requestAnimationFrame(animate);
}
});

}
