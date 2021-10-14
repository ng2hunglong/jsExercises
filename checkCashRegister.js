function checkCashRegister(price, cash, cid) {
    let sum = 0;
    for (let val of cid) {
        sum += val[1];
    }
    if (sum == cash - price) {
        console.log({"status": "CLOSED", "change": cid})
        return {"status": "CLOSED", "change": cid}
    }
    let ccy = ['PENNY', 'NICKEL', 'DIME', 'QUARTER', 'ONE', 'FIVE', 'TEN', 'TWENTY', 'ONE HUNDRED'];
    let ccyVal = [0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20, 100];

    /**
     * ["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]
     */
    let changeLeft = cash - price;
    // console.log(changeLeft);
    let change = [];
    let i = 8;
    // while (i >=0 && changeLeft > 0) {
    while (i >=0) {
        if (cid[i][1] > 0 && changeLeft >= ccyVal[i]) {
            if (cid[i][1] >= Math.floor(changeLeft / ccyVal[i]) * ccyVal[i]) {
                // console.log(cid[i][1])
                // console.log(Math.floor(changeLeft / ccyVal[i]))
                change.push([ccy[i], Math.floor(changeLeft / ccyVal[i]) * ccyVal[i]]);
                console.log(`1 changeLeft: ${changeLeft}, ${[ccy[i], Math.floor(changeLeft / ccyVal[i]) * ccyVal[i]]}`)
                changeLeft -= Math.floor(changeLeft / ccyVal[i]) * ccyVal[i];
                changeLeft = changeLeft.toFixed(2);
            } else {
                change.push([ccy[i], cid[i][1]]);
                console.log(`2 changeLeft: ${changeLeft}, ${[ccy[i], cid[i][1]]}`)
                changeLeft -= cid[i][1];
                changeLeft = changeLeft.toFixed(2);
            }
        } else {
            console.log(`3: ${[ccy[i], 0]}`)
            change.push([ccy[i], 0]);
        }
        i--;
        if (i < 0) {
            if (changeLeft > 0) {
                console.log({"status": "INSUFFICIENT_FUNDS", "change": []})
                return {"status": "INSUFFICIENT_FUNDS", "change": []};
            }
        }
    }
    console.log({"status": "OPEN", "change": change});
    return {"status": "OPEN", "change": change};
}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);

// checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])

// checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])

// checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])

// checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
