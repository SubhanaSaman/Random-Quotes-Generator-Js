let quotes = [',The future belongs to those who believe in the beauty of their dreams.','It is not length of life, but depth of life.” Ralph Waldo Emerson. Happiness depends upon ourselves.” Aristotle.','It is not length of life, but depth of life.” Ralph Waldo Emerson. Happiness depends upon ourselves.” Aristotle.','“Just one small positive thought in the morning can change your whole day.” — ...','“Opportunities dont happen, you create them.” — ...','“Opportunities dont happen, you create them.” — ...','“Opportunities dont happen, you create them.” — ...','“Success usually comes to those who are too busy to be looking for it.” —Henry David Thoreau','I never dreamed about success. I worked for it.” —Estée Lauder','Success is getting what you want; happiness is wanting what you get.” ―W. P. Kinsella','When I believe in something, I’m like a dog with a bone.” —Melissa McCarthy','The standard you walk past is the standard you accept.” —David Hurley','The standard you walk past is the standard you accept.” —David Hurley'];


function Generator(){
    
let choices =  quotes[Math.floor( Math.random()*quotes.length)];
document.getElementById('Quotes').innerHTML = choices

}