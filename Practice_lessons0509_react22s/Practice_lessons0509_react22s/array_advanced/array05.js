const claculate = (grades) => {
  return grades.reduce((total, number) => {
    return (total += number);
  }, 0);
};

const grades = [12, 12, 12, 12];
console.log(claculate(grades));
