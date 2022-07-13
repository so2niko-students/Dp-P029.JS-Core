function howMuchHeads() {
    const QUESTION = 'Write how many heads has each dragon(with coma\'s and space)?';
    const SEPARATOR = ', ';
    return prompt(QUESTION).split(SEPARATOR).reduce((acc, a) => acc * a, 1);
}