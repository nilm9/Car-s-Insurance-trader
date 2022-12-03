export const BRANDS = [
  { id: 1, name: "Europeo" },
  { id: 2, name: "Americano" },
  { id: 3, name: "Asíatico" },
];

const YEARMAX = new Date().getFullYear();
export const YEARS = Array.from(
  new Array(20),
  (valor, index) => YEARMAX - index
);

export const PLANS = [
  { id: 1, name: "Basic" },
  { id: 2, name: "Full" },
];
