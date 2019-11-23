

export const GenerateAnswer = (req) => {
  let result = '';
  switch (req) {
    case req.Match(/[Пп]ривет/):
      result+= 'Привет\n';
  }
}