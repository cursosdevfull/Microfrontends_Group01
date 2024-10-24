export type optionSelect = { value: string; label: string };
export type optionSelects = optionSelect[];

export type controlsAllowed = 'TEXT' | 'DATE' | 'SELECT';
export type controlsInput = Extract<controlsAllowed, 'TEXT' | 'DATE'>;
export type controlsWithOptions = Exclude<controlsAllowed, controlsInput>;

type controlsCommon = {
  name: string;
  errorMessage: string;
  label: string;
  required: boolean;
};

type dynamicTypes =
  | { type: controlsInput }
  | { type: controlsWithOptions; options: optionSelects };

export type controlFormGroup = controlsCommon & dynamicTypes;
export type controlFormGroups = controlFormGroup[];

export type optionFormGroup = {
  name: string;
  controls: controlFormGroups;
};
export type optionsFormGroup = optionFormGroup[];
