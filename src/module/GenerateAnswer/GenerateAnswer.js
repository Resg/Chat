

export const GenerateAnswer = (req) => {
  let result = '';
  switch (req) {
    case /[Пп]ривет/.test(req):
      console.log('asdasdfqf');
      result+= 'Привет\n';
  }
  return result;
}