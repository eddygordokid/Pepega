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
function letSearch(num) {
    let engLetter = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let answ = '';
    let intОfNum = num;
    let RemOfNum;
        do {
            if(Math.trunc(intОfNum) > 0){
            RemOfNum = Math.trunc((intОfNum - 1) % engLetter.length);
            intОfNum = Math.trunc((intОfNum - 1) / engLetter.length);
            answ = answ + engLetter.toString().charAt(RemOfNum);
        }
        } while (Math.trunc(intОfNum) > 0);
    return answ;
}
function main() {
    let columnNumber = prompt('Номер столбца EXCELE ');
    columnNumber = inputNum(columnNumber);
    answ = letSearch(columnNumber);
    document.write('Буквенное обозначение столбца в Excele = ' + answ);
}
main();