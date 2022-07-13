function sort(text) {
    const RE_DIGIT = /\d/;
    const SPACE = ' ';
    const arrayWords = text.split(SPACE);
    arrayWords.sort((a, b) => a.match(RE_DIGIT) - b.match(RE_DIGIT));
    return arrayWords.join(SPACE);
}

