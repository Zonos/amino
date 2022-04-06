export interface OptionState {
  hasValue: boolean;
  isMulti: boolean;
  isRtl: boolean;
  options: Data[];
  selectProps: SelectProps;
  theme: Theme;
  innerProps: InnerProps;
  data: Data;
  isDisabled: boolean;
  isSelected: boolean;
  label: string;
  type: string;
  value: string;
  isFocused: boolean;
  children: string;
}

interface Data {
  label: string;
  value: string;
}

interface InnerProps {
  id: string;
  tabIndex: number;
}

interface SelectProps {
  hideSelectedOptions: boolean;
  isMulti: boolean;
  components: Components;
  options: Data[];
  styles: Components;
  inputValue: string;
  menuIsOpen: boolean;
  value: Data[];
  'aria-live': string;
  backspaceRemovesValue: boolean;
  blurInputOnSelect: boolean;
  captureMenuScroll: boolean;
  closeMenuOnSelect: boolean;
  closeMenuOnScroll: boolean;
  controlShouldRenderValue: boolean;
  escapeClearsValue: boolean;
  isDisabled: boolean;
  isLoading: boolean;
  isRtl: boolean;
  isSearchable: boolean;
  maxMenuHeight: number;
  minMenuHeight: number;
  menuPlacement: string;
  menuPosition: string;
  menuShouldBlockScroll: boolean;
  menuShouldScrollIntoView: boolean;
  openMenuOnFocus: boolean;
  openMenuOnClick: boolean;
  pageSize: number;
  placeholder: string;
  tabIndex: number;
  tabSelectsValue: boolean;
}

interface Components {}

interface Theme {
  borderRadius: number;
  colors: { [key: string]: string };
  spacing: Spacing;
}

interface Spacing {
  baseUnit: number;
  controlHeight: number;
  menuGutter: number;
}
