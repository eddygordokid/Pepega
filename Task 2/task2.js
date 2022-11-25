function inputNum(num) {
    let isNum = Number(num);
    do {
        if (isNaN(isNum) || num <= null) {
            if (isNaN(isNum) || num <= null) {
                num = prompt('Введены некорректные данные. Введите число, больше 0;');
            }
            isNum = Number(num);
        }
    } while (isNaN(isNum) || isNum <= null)
    return isNum;
}
function letterSearch(num) {
    let engLetter = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let answ = '';
    let intОfNum = num;
    let remainderOfNum;
    let i = 0;
    do {
            remainderOfNum = (intОfNum - 1) % engLetter.length;
            intОfNum = Math.trunc((intОfNum - 1) / engLetter.length);
            answ = answ + engLetter.toString().charAt(remainderOfNum);
            i++;
    } while (intОfNum > 0);
    let tempLetterMas = Array.from(i);
    tempLetterMas = answ.split('');
    tempLetterMas = tempLetterMas.reverse()
    answ = tempLetterMas.join('');
    return answ;
}
function main() {
    let columnNumber = prompt('Номер столбца Excel ');
    columnNumber = inputNum(columnNumber);
    answ = letterSearch(columnNumber);
    document.write('Буквенное обозначение столбца в Excel = ' + answ);
}
main();