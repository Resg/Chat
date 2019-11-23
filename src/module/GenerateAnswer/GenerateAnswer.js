

export const GenerateAnswer = (req) => {
  let result = '';
  if (/[Пп]ривет/.test(req)){
    console.log('asdasdfqf');
    result+= 'Привет\n';
  }
  if (/правил[ао]/.test(req.toLowerCase())) {
    result+= 'Правила игры: http://93.171.139.195:780/rules\n';
  }
  if (/игр/.test(req.toLowerCase())){
    result+= 'Игра онлайн: http://93.171.139.195:780/online\n';
  }
  if (/интернет/.test(req.toLowerCase())){
    result+= 'Игра без интернета: http://93.171.139.195:780/offline\n';
  }
  if (/(изменить)|(поменять)/.test(req.toLowerCase())){
    result+= 'Настройка профиля доступна после авторизации по ссылке:\n http://93.171.139.195:780/profileChange\n'
  }
  return result;
};