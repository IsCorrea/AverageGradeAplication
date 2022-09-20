const students = [
  {
    name: 'João',
    firstGrade: 1,
    secondGrade: 8
  },
  {
    name: 'Letícia',
    firstGrade: 8,
    secondGrade: 7
  },
  {
    name: 'Diego',
    firstGrade: 9,
    secondGrade: 5
  },
  {
    name: 'Júlia',
    firstGrade: 5,
    secondGrade: 5
  }
]

function averageGrade(firstGrade, secondGrade) {
  let averageGrade = (firstGrade + secondGrade)/2
  return averageGrade
}

function averageMessage(student) {
  return `A média do(a) aluno(a) ${student.name} é ${averageGrade(student.firstGrade, student.secondGrade)}`
}

for (let student of students) {
  let message = averageMessage(student)

  if (averageGrade(student.firstGrade, student.secondGrade) >= 7)  {
    alert(`${message}\nParabéns, ${student.name}! Você foi aprovado(a) no concurso!`);
  } else {
    alert(`${message}\nNão foi dessa vez, ${student.name}! Tente novamente!`);
  }
}