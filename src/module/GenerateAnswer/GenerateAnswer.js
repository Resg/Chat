

export const GenerateAnswer = (req) => {
  let result = '';
  if (/[Пп]ривет/.test(req)){
    console.log('asdasdfqf');
    result+= 'Привет\n';
  }
  if (/(правил[ао])/.test(req.toLowerCase())) {
    result+= 'Правила игры: http://93.171.139.195:780/rules\n';
  }
  return result;
};