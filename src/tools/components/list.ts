export const list = (param: any[]) => {
  let listValue = '';

  listValue += `<ol>`;

  param.forEach((items: any) => {
    listValue += `<li>${items}</li>`;
  });

  listValue += `</ol>`;

  return listValue;
};
