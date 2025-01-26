import { CHECKBOX_CONFIG, DISPLAY_TEXT } from "../constants/constants";

export function CheckboxList(formId, categoriesCount) {
  const categoriesForm = document.getElementById(formId);

  for (let i = 1; i <= categoriesCount; i++) {
    const label = document.createElement("label");
    const checkbox = document.createElement("input");
    const text = document.createTextNode(`${DISPLAY_TEXT.CATEGORY_PREFIX}${i}`);

    checkbox.type = CHECKBOX_CONFIG.TYPE;
    checkbox.name = CHECKBOX_CONFIG.NAME;
    checkbox.value = i;

    label.appendChild(checkbox);
    label.appendChild(text);
    label.classList.add(CHECKBOX_CONFIG.CLASS);

    categoriesForm.appendChild(label);
  }
}
