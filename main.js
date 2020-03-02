// Функция создания матрицы
function genMatrix(n) {
    let matrix = new Array();
    var size = 2 * n - 1,
        //   Первое число в массиве
        i = 1;

    for (var row = 0; row < size; row++) {
        matrix[row] = [];
        for (var col = 0; col < size; col++) {
            // Раскладывание чисел по координатам
            matrix[row][col] = i++;
        }
    }
    return matrix;
}

function outputMatrix(matrix) {
    document.write("<table id='myTable'>");

    for (var row = 0; row < matrix.length; row++) {
        document.write("<tr>");
        for (var col = 0; col < matrix[row].length; col++) {
            document.write("<td>" + matrix[row][col] + "</td>");
        }
        document.write("</tr>");
    }

    document.write("</table>");
}

// Color 
var color = 0;

function setColor() {
    color = color + (60 / (n * n));
    table.rows[y].cells[x].style.backgroundColor = "hsl(" + color + ", 90%, 50%)";
}
//--------------------------------

var n = 13;
var matrix = genMatrix(n);
console.log(matrix);
outputMatrix(matrix);

var table = document.getElementById('myTable');

var size = 2 * n - 1;
var startPoint = Math.floor(size / 2);
var x = startPoint,
    y = startPoint;

let result = [];

// Первое число спирали
result.push(matrix[y][x]);
setColor()


// Переход из круга в круг
for (var circle = 1; circle <= startPoint; circle++) {
    var direction = 0;
    var qtyStepsInOneDir = 2 * circle;
    var qtyStepsDoneInOneDir = 0;

    // Шаг влево для начала нового круга
    x = x - 1;
    result.push(matrix[y][x]);
    setColor();


    // 1 полный оборот; перебор всех элементов круга
    for (var step = 1; step < 8 * circle; step++) {
        // Шаг перехода к следующему элементу
        switch (direction) {
            case 0:
                y = y + 1;
                break;
            case 1:
                x = x + 1;
                break;
            case 2:
                y = y - 1;
                break;
            case 3:
                x = x - 1;
                break;
        }

        result.push(matrix[y][x]);
        setColor();
        qtyStepsDoneInOneDir = qtyStepsDoneInOneDir + 1;

        if (
            (direction == 0 && qtyStepsDoneInOneDir == qtyStepsInOneDir - 1) ||
            qtyStepsDoneInOneDir == qtyStepsInOneDir
        ) {
            direction = direction + 1;
            qtyStepsDoneInOneDir = 0;
        }
    }
}

console.log(result);

document.write(
    '<br/> <div style="max-width: 90%">' +
    "<p> Результат: </p>" +
    result.join(", ") +
    "</div>"
);