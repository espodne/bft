import {
  DISPLAY_TEXT,
  CLASS_NAMES,
  URL_PARAMS,
  RESET_DISPLAY_ELEMENT,
} from "../constants/constants";

export function updateURL(selectedIds, paramName = URL_PARAMS.CATEGORY) {
  if (!Array.isArray(selectedIds)) {
    console.error(DISPLAY_TEXT.INVALID_SELECTED_IDS);
    return;
  }

  const params = new URLSearchParams();
  selectedIds.forEach((id) => params.append(paramName, id));
  const newURL = `${window.location.pathname}?${params.toString()}`;
  history.pushState(null, "", newURL);
}

export function selectedIdsDisplay(selectedIds) {
  const displayElement = document.getElementById("list");
  displayElement.innerHTML = RESET_DISPLAY_ELEMENT;
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
