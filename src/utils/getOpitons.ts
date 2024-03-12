import _ from 'lodash';

type Options = {
  value: string,
  label: string,
};

const getOptions = (colorNames: string[]) => {
  const defaultOptions = [
    {value: 'all', label: 'Все группы'},
    {value: 'closed', label: 'Закрытые группы'},
    {value: 'opened', label: 'Открытые группы'},
    {value: 'friends', label: 'Группы, у которых есть друзья'},
    {value: 'noFriends', label: 'Группы, у которых нет друзей'},
    {value: 'color', label: 'Группы с цветным аватаром'},
  ];
  
  const colorOptions = _.uniq(colorNames).reduce((acc: Options[], name) => {
    acc.push({ value: name, label: `Группы с аватаром цвета ${name}` });
  
    return acc;
  }, []);
  
  return [...defaultOptions, ...colorOptions];
};

export default getOptions;
