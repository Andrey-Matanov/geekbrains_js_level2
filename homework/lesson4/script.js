// Задание 1-2
// str - строка для проверки функции

let str = `'You'll never guess what I've just seen!' said Sam, excitedly.`;

function formatDirectSpeechQuotes(text) {
    return text.replaceAll(/\B'|'\B/g, '"');
}
