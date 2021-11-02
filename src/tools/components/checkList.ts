let value = '';
export const checklist = (param: { checked: boolean; text: string }[]) => {
  value = '';
  param.forEach((items: { checked: boolean; text: string }) => {
    value += `<div class="ejs-form-check"><input class="ejs-form-check__input" type="radio" name="ejsRadios" id="ejsRadio" value="option1" ${
      items.checked ? 'checked' : ''
    }><label class="ejs-form-check__label" for="ejsRadio">${
      items.text
    }</label></div>`;
  });

  return value;
};
