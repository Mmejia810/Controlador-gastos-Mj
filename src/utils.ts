export function getRandomId() {
  return Math.floor(Math.random() * Date.now());
}

export function formatCOP(value: number) {
  return new Intl.NumberFormat("es-CO").format(value);
}
