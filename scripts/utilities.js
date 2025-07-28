export function getInputValueById(id) {
  const getValue = document.getElementById(id).value;
  return parseFloat(getValue);
}
