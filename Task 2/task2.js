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
    do {
            remainderOfNum = (intОfNum - 1) % engLetter.length;
            intОfNum = Math.trunc((intОfNum - 1) / engLetter.length);
            answ = engLetter.toString().charAt(remainderOfNum) + answ;
    } while (intОfNum > 0);
    return answ;
}
function main() {
    let columnNumber = prompt('Номер столбца Excel ');
    columnNumber = inputNum(columnNumber);
    answ = letterSearch(columnNumber);
    document.write('Буквенное обозначение столбца в Excel = ' + answ);
}
main();