export const checklist = (param: {
    array: { checked: boolean; text: string }[];
}) => {
    let checklistValue = '';
    param.array.forEach((element: { checked: boolean; text: string }) => {
        checklistValue += `<div class="form-checklist">
                                <input 
                                    class="form-checklist__input" 
                                    type="radio" name="checklist" 
                                    id="form-checklist" 
                                    value="option1" 
                                    ${element.checked ? 'checked' : ''}/>
                                <label 
                                    class="form-checklist__label" 
                                    for="form-checklist">
                                    ${element.text}
                                </label>
                            </div>`;
    });
    return checklistValue;
};
