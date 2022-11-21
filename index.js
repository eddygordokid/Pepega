function inputNum(num) {
    let isNum = Number(num);
    do {
        if (isNaN(isNum)) {
            if (isNaN(isNum)) {
                num = prompt('Введены некорректные данные. Введите число;');
            }
            isNum = Number(num);
        }
    } while (isNaN(isNum))
    return num;
}
function inputXY(pointNumber) {
    let isNumXY = prompt('Введите координату X и Y точки под номером ' + (pointNumber + 1));
    let split = isNumXY.split(' ');
    let isNumX = parseFloat(split[0]);
    let isNumY = parseFloat(split[1]);
    let tochkaX;
    let tochkaY;
    do {
        if (isNaN(isNumX) || isNaN(isNumY)) {
            if (isNaN(isNumX) && isFinite(isNumY)) {
                tochkaX = prompt('Y = ' + isNumY + ' Введены некорректные данные. Введите корректный X: ');
                tochkaY = isNumY;
            }
            if (isFinite(isNumX) && isNaN(isNumY)) {
                tochkaY = prompt('X = ' + isNumX + ' Введены некорректные данные. Введите корректный Y: ');
                tochkaX = isNumX;
            }
            if (isNaN(isNumX) && isNaN(isNumY)) {
                alert('Обе координаты введены не правильно');
                tochkaX = prompt('Введите X: ');
                tochkaY = prompt('Введите Y: ');
            }
            isNumX = Number(tochkaX);
            isNumY = Number(tochkaY);
        }
    } while (isNaN(isNumX) && isNaN(isNumY));
    return [isNumX, isNumY];
}
function calcDist(numX, numY) {
    dist = Math.sqrt(numX * numX + numY * numY);
    return dist;
}
function swap(first, second) {
    return [second, first];
}

function main() {
    let amountDot = prompt('Введите количество точек: ');
    amountDot = inputNum(amountDot);
    let k = prompt('Количество нааиболее близких точек к началу координат: ');
    k = inputNum(k);
    let x = Array.from(amountDot - 1);
    let y = Array.from(amountDot - 1);
    for (let i = 0; i < amountDot; i++) {
        [x[i], y[i]] = inputXY(i);
    }
    let dist = Array.from(amountDot - 1);
    let index = Array.from(amountDot - 1);
    for (i = 0; i < amountDot; i++) {
        dist[i] = calcDist(x[i], y[i]);
        index[i] = i;
    }
    for (i = 0; i < amountDot; i++) {
        for (let j = 0; j < amountDot - i; j++) {
            if (dist[j] > dist[j + 1]) {
                [index[j], index[j + 1]] = swap(index[j], index[j + 1]);
                [dist[j], dist[j + 1]] = swap(dist[j], dist[j + 1])
            }
        }
    }
    document.write('Самые близкие точки к началу координат ');
    for (i = 0; i < k; i++) {
        document.write('[' + x[index[i]] + ',' + y[index[i]] + ']');
    }
}
main();