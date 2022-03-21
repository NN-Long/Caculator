let input1 = "0";
let input2 = "0";
let checkOp = false;
let operator1 = "";
let checkInput = true;
let checkOutput = false;

$(".number :button").click(function () {
    if (operator1 != "") {
        checkOp = true;
        if (input2 == "0" && $(this).val() != ".") {
            input2 = "";
            input2 += $(this).val();
        } else {
            input2 += $(this).val();
        }
        $("#screen").val(input2);
    } else if (!checkOutput) {
        if (input1 == "0" && $(this).val() != ".") {
            input1 = "";
            input1 += $(this).val();
        } else {
            input1 += $(this).val();
        }
        $("#screen").val(input1);
    } else {
        if ($(this).val() == ".") input1 = "0";
        else input1 = "";
        input1 += $(this).val();
        $("#screen").val(input1);
        checkOutput = false;
    }
})

$("#reset").click(function (e) {
    input1 = "0";
    input2 = "0";
    checkOp = false;
    operator1 = "";
    checkInput = true;
    checkOutput = false;
    $("#screen").val(input1);
    checkDot(checkInput);
});

$(".operator :button").click(function () {
    if (checkOp) calculator(operator1);

    $("#screen").val(input1);
    if ($(this).hasClass("sum")) {
        operator1 = "sum";
    } else if ($(this).hasClass("sub")) {
        operator1 = "sub";
    } else if ($(this).hasClass("multip")) {
        operator1 = "multip";
    } else if ($(this).hasClass("div")) {
        operator1 = "div";
    }
    checkInput = true;
    checkDot(checkInput);
});

$(".output :button").click(function () {
    checkInput = true;
    calculator(operator1);
    $("#screen").val(input1);
    operator1 = "";
    checkDot(checkInput);
    checkOutput = true;
});

function calculator(operator) {

    switch (operator) {
        case "sum":
            input1 = Number(input1) + Number(input2);
            input2 = 0;
            break;
        case "sub":
            input1 = Number(input1) - Number(input2);
            input2 = 0;
            break;
        case "multip":
            input1 = Number(input1) * Number(input2);
            input2 = 0;
            break;
        case "div":
            input1 = Number(input1) / Number(input2);
            input2 = 0;
            break;
        default:
            input1 = Number(input1);
            break;
    }

    checkOp = false;
}

$(".reverse :button").click(function () {
    if (checkOp) {
        if (input2 != 0) {
            input2 = Number(input2) * (-1)
        }
        $("#screen").val(input2);
    } else {
        if (input1 != 0) {
            input1 = Number(input1) * (-1)
        }
        $("#screen").val(input1);
    }
});

$(".percent").click(function () {
    if (checkOp) {
        if (input2 != 0) {
            input2 = Number(input2) / 100
        }
        $("#screen").val(input2);
    } else {
        if (input1 != 0) {
            input1 = Number(input1) / 100
        }
        $("#screen").val(input1);
    }
    checkInput = false;
    checkDot(checkInput);
});

$("#dot").click(function () {
    $(this).prop('disabled', true);
});

function checkDot(check) {
    if (checkInput) {
        $("#dot").prop('disabled', false);
    } else {
        $("#dot").prop('disabled', true);
    }
}
