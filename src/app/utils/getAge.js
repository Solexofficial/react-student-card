export default function getAge(birthYear) {
  const date = new Date();
  const currentYear = date.getFullYear();
  const age = currentYear - birthYear;
  const declensionsAge = ['год', 'года', 'лет'];

  function formatAgeDeclensions(age, declensions) {
    age = Math.abs(age) % 100;
    const n1 = age % 10;
    if (age > 10 && age < 20) {
      return declensions[2];
    }
    if (n1 > 1 && n1 < 5) {
      return declensions[1];
    }
    if (n1 === 1) {
      return declensions[0];
    }
    return declensions[2];
  }

  return `${birthYear} (${age} ${formatAgeDeclensions(age, declensionsAge)})`;
}
