
    function myValidate()  
    {
        var bet = document.getElementById("startingBet").value;
        

        if  (isNaN(bet)) {
            alert("You must input a number!");
        }
            else    {
                if  (bet <= 0)  {
                    alert("You must input a number greater than 0!");
                }
            else {
                bet = document.getElementById("startingBet").value;
                var luckyArray = [];
                var money = parseInt(bet);


                for (result = 0; money > 0; money += result) {
                    var dice = ((Math.floor(Math.random() * 12) + 1));
                    if (dice != 7) {
                        result = -1;
                    } else {
                        result = +4;
                    }
                    luckyArray.push(money);

                }

                var y = 0;
                var z = 1;

                for (var x = 0; x < luckyArray.length - 1; x++) {
                    if ((x - (luckyArray.length - 1) != 0)) {
                        if (luckyArray[y] > luckyArray[z]) {
                            z++;
                        } else {
                            y = z;
                            z++;
                        }
                    }
                }

                var highestDollarAmount = luckyArray[y];
                var rollCount = (luckyArray.indexOf(highestDollarAmount) + 1);
                var totalRolls = luckyArray.length;
                document.getElementById("tableStartingBet").innerHTML = bet;
                document.getElementById("tableTotalRolls").innerHTML = totalRolls;
                document.getElementById("tableHighestAmount").innerHTML = highestDollarAmount;
                document.getElementById("tableRollCount").innerHTML = rollCount;
                document.getElementById("output").style.display = "block";
            }
            }
    }




