export const formatNumber = (num: number) => {
  if (num >= 1000) {
    // Divide by 1000 and keep one decimal point if necessary
    let formattedNum = (num / 1000).toFixed(1);

    // If the formatted number ends in ".0", remove the decimal part
    formattedNum = formattedNum.endsWith(".0")
      ? formattedNum.slice(0, -2)
      : formattedNum;

    return `${formattedNum}k`;
  }

  return num.toString();
};
