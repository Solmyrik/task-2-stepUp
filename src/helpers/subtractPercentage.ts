export const subtractPercentage = (number: number, percentage: number) => {
  const result = number - number * (percentage / 100);
  return result.toFixed(1);
};
