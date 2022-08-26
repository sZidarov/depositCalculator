function depositCalculator (input) {
    let depositSum = Number (input[0]);
    let depositTerm = Number (input [1]);
    let annualInterest = Number (input[2]);
    
    let annualProfit = depositSum * (annualInterest / 100);
    let monthlyProfit = annualProfit / 12;
    let endSum = depositSum + (monthlyProfit*depositTerm);
    console.log(endSum);

}
depositCalculator ([200, 3, 5.7]);
depositCalculator ([2350, 6, 7]);