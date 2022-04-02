setTimeout(CreateButtons, 1000); // Short delay to make sure all countdowns were generated

function CreateButtons() {
    var countdownList = document.getElementsByClassName("sidebar-countdown");

    for (let i = 0; i < countdownList.length; i++) {
        countdownList[i].style.textAlign = "center";

        let button = document.createElement("button");
        button.innerHTML = "Delay";
        button.style.fontSize = "16px";
        button.style.margin = "5px";

        button.onclick = function () {

            let minNumbers = countdownList[i].getElementsByClassName("minutes-2")[0].children;
            for (let j = 0; j < minNumbers.length; j++) {
                if (IncrementDigit(minNumbers[j], 10, j))
                    if (IncrementDigit(countdownList[i].getElementsByClassName("minutes-1")[0].children[j], 6))
                        if (IncrementDigit(countdownList[i].getElementsByClassName("hours-2")[0].children[j], 10))
                            if (IncrementDigit(countdownList[i].getElementsByClassName("hours-1")[0].children[j], 6))
                                if (IncrementDigit(countdownList[i].getElementsByClassName("days-2")[0].children[j], 10))
                                    IncrementDigit(countdownList[i].getElementsByClassName("days-1")[0].children[j], 10);
            }
        };
        countdownList[i].appendChild(button);
        button.click(); // Force timers to get blocked
    }
    DecreaseTimers();
    setInterval(DecreaseTimers, 60000)
}

function DecreaseTimers() {
    for (let i = 0; i < countdownList.length; i++) {
        let minNumbers = countdownList[i].getElementsByClassName("minutes-2")[0].children;
        for (let j = 0; j < minNumbers.length; j++) {
            if (DecrementDigit(minNumbers[j], 10, j))
                if (DecrementDigit(countdownList[i].getElementsByClassName("minutes-1")[0].children[j], 6))
                    if (DecrementDigit(countdownList[i].getElementsByClassName("hours-2")[0].children[j], 10))
                        if (DecrementDigit(countdownList[i].getElementsByClassName("hours-1")[0].children[j], 6))
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

function IncrementDigit(digit, modulo) {
    let num = Number(digit.textContent);
    digit.textContent = (num + 1) % modulo;
    return (num == modulo - 1);
}
