export function getSubYear(year) {
  return new Date().getFullYear() - year;
}

export function getBrand(type) {
  let incr = 0;
  switch (type) {
    case "1":
      incr = 1.3;
      break;
    case "2":
      incr = 1.15;
      break;
    case "3":
      incr = 1.05;
      break;
    default:
      break;
  }
  return incr;
}

export function getPlan(plan) {
  return plan === "1" ? 1.2 : 1.5;
}

export function formatMoney(quantity) {
  return quantity.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
}
