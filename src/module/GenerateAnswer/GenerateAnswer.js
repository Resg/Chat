

export const GenerateAnswer = (req) => {
  let result = '';
  if (/[Пп]ривет/.test(req)){
    console.log('asdasdfqf');
    result+= 'Привет';
  }
  return result;
};