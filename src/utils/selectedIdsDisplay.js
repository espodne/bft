import {
  DISPLAY_TEXT,
  CLASS_NAMES,
  RESET_DISPLAY_ELEMENT,
} from "../constants/constants";

export function selectedIdsDisplay(selectedIds) {
  const displayElement = document.getElementById("list");
  displayElement.textContent = RESET_DISPLAY_ELEMENT;
  selectedIds.length === 0
    ? (displayElement.textContent = DISPLAY_TEXT.EMPTY_LIST)
    : null;

  selectedIds.forEach((id) => {
    const elementId = document.createElement("div");
    elementId.classList.add(CLASS_NAMES.LIST_ITEM);
    elementId.textContent = `${DISPLAY_TEXT.CATEGORY_PREFIX}${id}`;
    displayElement.appendChild(elementId);
  });
}
