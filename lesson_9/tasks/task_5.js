/*
  Задание:
  Скопировать текст из файла RegExp.txt на сайт https://regexr.com/
  Написать регулярное выражение которое найдет:
    1. Все слова.
    2. Все совпадения букв от a до e,
    3. Года, например 2004
    4. Слова обернутые в [квадратныеКавычки]
    5. Все форматы файлов .jpg / .png / .gif
    6. Все email com.ua
    7. Все слова написанные с большой буквы
    8. Найти телефон написаный по паттерну +00 (000) 000-00-00,
       где вместо 0 может быть любое число
*/

let text = `
Lorem ae ipsum 22 is a [pseudo] Latin [2012] texte eused in web design, typography, layout, and printing in place of English to emphasise design elements over content. It's also called placeholder repeat (or filler) text. It's a convenient tool for http://facebook.com mock-ups vasya@gmail.com. It helps to outline the visual elements of a document or presentation, eg typography, font, or layout. Lorem ipsum is mostly a part of a Latin text by the classical author gray and color colour philosopher Cicero. Its words and he letters 2006 have been changed by addition or removal, so to deliberately render its content nonsensical; it's not genuine, grey correct, or comprehensible Latin anymore. While lorem ipsum's [still] resembles classical Latin, it actually has no meaning whatsoever. As Cicero's text doesn't contain the letters K, W, or Z, alien to latin, these, and others are often inserted randomly to mimic the typographic appearence of European languages, as are andrew@itea.ua digraphs not to be found in the original.
In a 2007 professional context it often happens that private 144444
or corporate clients corder a publication .jpg  to be made and presented with the +708961472288 .gzip actual petya@ukr.net content still not being ready.
Think of a news .gif blog that's filled with content hourly on the day of going live. However, reviewers tend to be distracted
exemple@ukr.com.ua
by comprehensible +95 255 478 21 11 content, say, a random text copied from a newspaper or the internet. The are likely to focus on the text, 0001 disregarding the layout and its elements. Besides, random text +38 (351) 548-58-54 risks to be uni 233
ntendedly 2020 humorous or [offensive], an unacceptable risk 2004 2008 in corporate environments. .mp3 Lorem ipsum and its many variants have been http://google.com.ua employed since the early 1960 ies, and quite likely since the sixteenth century.`;
console.log(text);

console.log('task 1');
let regex1 = /([A-Za-z])\w+/g;
console.log(text.match(regex1));

console.log('task 2');
let regex2 = /([a-e])\w+/g;
console.log(text.match(regex2));

console.log('task 3');
let regex3 = /\b([0-9]{4})\b/g;
console.log(text.match(regex3));

console.log('task 4');
let regex4 = /\[\w+\]/g;
console.log(text.match(regex4));

console.log('task 5');
let regex5 = /\B\.\w{3}\b/g;
console.log(text.match(regex5));

console.log('task 6');
let regex6 = /(\w+)@(\w+)\.(com.ua)/g;
console.log(text.match(regex6));

console.log('task 7');
let regex7 = /[A-Z]\w+/g;
console.log(text.match(regex7));

console.log('task 8');
let regex8 = /(\+\d{2})\s(\(\d{3}\))\s(\d{3})-(\d{2})-(\d{2})/g;
console.log(text.match(regex8));