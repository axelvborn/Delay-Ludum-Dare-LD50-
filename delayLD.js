var countdownList = document.getElementsByClassName("sidebar-countdown");
setTimeout(CreateButtons, 1000); // Short inevitable delay to make sure all countdowns were generated

function CreateButtons() {
    for (let i = 0; i < countdownList.length; i++) {
        countdownList[i].style.textAlign = "center";

        let button = document.createElement("button");
        button.innerHTML = "Delay";
        button.style.fontSize = "16px";
        button.style.margin = "5px";

        button.onclick = function () {

            let minNumbers = countdownList[i].getElementsByClassName("minutes-2")[0].children;
            for (let j = 0; j < minNumbers.length; j++) {
                if (IncrementDigit(minNumbers[j], 10))
                    if (IncrementDigit(countdownList[i].getElementsByClassName("minutes-1")[0].children[j], 6)) {
                        if (IncrementDigit24(countdownList[i].getElementsByClassName("hours-1")[0].children[j], countdownList[i].getElementsByClassName("hours-2")[0].children[j]))
                            if (IncrementDigit(countdownList[i].getElementsByClassName("days-2")[0].children[j], 10))
                                IncrementDigit(countdownList[i].getElementsByClassName("days-1")[0].children[j], 10);
                    }
            }
        };
        countdownList[i].appendChild(button);
    }
    DecreaseTimers();
    setInterval(DecreaseTimers, 1000);
}

function DecreaseTimers() {
    for (let i = 0; i < countdownList.length; i++) {
        let secNumbers = countdownList[i].getElementsByClassName("seconds-2")[0].children;
        for (let j = 0; j < secNumbers.length; j++) {
            if (DecrementDigit(secNumbers[j], 10))
                if (DecrementDigit(countdownList[i].getElementsByClassName("seconds-1")[0].children[j], 6))
                    if (DecrementDigit(countdownList[i].getElementsByClassName("minutes-2")[0].children[j], 10))
                        if (DecrementDigit(countdownList[i].getElementsByClassName("minutes-1")[0].children[j], 6))
                            if (DecrementDigit24(countdownList[i].getElementsByClassName("hours-1")[0].children[j], countdownList[i].getElementsByClassName("hours-2")[0].children[j]))
                                if (DecrementDigit(countdownList[i].getElementsByClassName("days-2")[0].children[j], 10))
                                    DecrementDigit(countdownList[i].getElementsByClassName("days-1")[0].children[j], 10);
        }
    }
}
function DecrementDigit(digit, modulo) {
    let num = Number(digit.textContent);
    if (num == 0) {
        digit.textContent = modulo - 1;
    } else {
        digit.textContent = num - 1;
    }
    return (num == 0);
}
function DecrementDigit24(digit1, digit2) {
    let num1 = Number(digit1.textContent);
    let num2 = Number(digit2.textContent);
    if (num2 == 0) {
        if (num1 == 0) {
            num1 = 2;
            num2 = 3;
        } else {
            num1 = num1 - 1;
            num2 = 9;
        }
    } else {
        num2 = num2 - 1;
    }
    digit1.textContent = num1;
    digit2.textContent = num2;
    return (num1 == 2 && num2 == 3);
}

function IncrementDigit(digit, modulo) {
    let num = Number(digit.textContent);
    digit.textContent = (num + 1) % modulo;
    return (num == modulo - 1);
}

function IncrementDigit24(digit1, digit2) {
    let num1 = Number(digit1.textContent);
    let num2 = Number(digit2.textContent);
    if (num2 == 9) {
        num2 = 0;
        num1 = num + 1;
    } else if (num1 == 2 && num2 == 3) {
        num2 = 0;
        num1 = 0;
    } else {
        num2 = num2 + 1;
    }
    digit1.textContent = num1;
    digit2.textContent = num2;
    return (num1 + num2 == 0);
}