

export const GenerateAnswer = (req) => {
  let result = '';
  switch (req) {
    case /[Пп]ривет/.test(req):
      result+= 'Привет\n';
  }
  return result;
}