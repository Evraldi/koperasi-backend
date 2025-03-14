exports.calculateMonthlyInterest = (principal, annualRate) => {
    const monthlyRate = annualRate / 12 / 100;
    return principal * monthlyRate;
  };
  
  exports.calculateMonthlyPayment = (principal, annualRate, tenureMonths) => {
    const monthlyRate = annualRate / 12 / 100;
    const numerator = principal * monthlyRate * Math.pow(1 + monthlyRate, tenureMonths);
    const denominator = Math.pow(1 + monthlyRate, tenureMonths) - 1;
    return numerator / denominator;
  };