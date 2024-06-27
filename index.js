export function avg(...xs) {
    if (xs.some((x) => x === NaN))
      throw new Error("NaN is not allowed in the input array.");
    return xs.reduce((acc, x) => acc + x, 0) / xs.length;
  }
  