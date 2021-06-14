export default str => {
  const values = str
    .replace(/\+|-|\*|\//gi, ',')
    .replace(/\s/g, '')
    .split(',');
  values.forEach(
    val =>
      (str = str.replace(val, isFloat(val) ? parseFloat(val) : parseInt(val))),
  );
  return str;
};

const isFloat = str => String(str).includes('.');
