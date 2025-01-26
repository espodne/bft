import { describe, it, expect, vi, beforeEach } from 'vitest';
import { handleForm, selectedIds } from './handleForm';
import { updateURL, selectedIdsDisplay } from '../utils/utils';
import { SELECTORS } from '../constants/constants';

vi.mock('../utils/utils', () => ({
  updateURL: vi.fn(),
  selectedIdsDisplay: vi.fn(),
}));

describe('handleForm', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    selectedIds.length = 0;

    document.body.innerHTML = `
      <input type="checkbox" value="1" class="checkbox" />
      <input type="checkbox" value="2" class="checkbox" />
      <div id="list"></div>
    `;
  });

  it('update selectedIds and call updateURL and selectedIdsDisplay on checkbox change', () => {
    handleForm();

    const checkboxes = document.querySelectorAll(SELECTORS.CHECKBOX);

    checkboxes[0].checked = true;
    checkboxes[0].dispatchEvent(new Event('change'));

    expect(selectedIds).toEqual(['1']);
    expect(updateURL).toHaveBeenCalledWith(['1']);
    expect(selectedIdsDisplay).toHaveBeenCalledWith(['1']);

    checkboxes[1].checked = true;
    checkboxes[1].dispatchEvent(new Event('change'));

    expect(selectedIds).toEqual(['1', '2']);
    expect(updateURL).toHaveBeenCalledWith(['1', '2']);
    expect(selectedIdsDisplay).toHaveBeenCalledWith(['1', '2']);

    checkboxes[0].checked = false;
    checkboxes[0].dispatchEvent(new Event('change'));

    expect(selectedIds).toEqual(['2']);
    expect(updateURL).toHaveBeenCalledWith(['2']);
    expect(selectedIdsDisplay).toHaveBeenCalledWith(['2']);
  });
});