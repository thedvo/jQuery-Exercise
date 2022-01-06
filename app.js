// Part One

// When the DOM is ready, console.log the message “Let’s get ready to party with jQuery!”
$('document').ready(function(){
    console.log("Let's get ready to party with jQuery!");
});

// Give all images inside of an article tag the class of image-center (this class is defined inside of the style tag in the head).
$('article img').addClass("image-center");

// Remove the last paragraph in the article.
$('article p:last-child').remove();

// Set the font size of the title to be a random pixel size from 0 to 100.
const randomPx = Math.floor(Math.random() * 100) + 1;
$('#title').css('font-size', randomPx + 'px');

// Add an item to the list; it can say whatever you want.
$('ol').append('<li>What a great list!</li>');

// Scratch that; the list is silly. Empty the aside and put a paragraph in it apologizing for the list’s existence.
$('aside').replaceWith("<p>We're so sorry that list ever existed. Will you forgive us?</p>");

// When you change the numbers in the three inputs on the bottom, the background color of the body should change to match whatever the three values in the inputs are.

$('input').on('click', (bgColor = () => {
    const r = $('input').eq(0).val();
    const g = $('input').eq(1).val();
    const b = $('input').eq(2).val();
    $('body').css('background-color', `rgb(${r}, ${g}, ${b})`);
  })
);

// Add an event listener so that when you click on the image, it is removed from the DOM.
$('img').on('click', function(){
    $(this).remove();
});


