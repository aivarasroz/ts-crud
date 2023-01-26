export type CheckboxGroupFieldProps = {
  labelText: string;
  name: string;
  options: Array<{ label: string, value: string}>;
  selected?: Array<{ label: string, value: string}>;
}

class CheckboxGroupField {

  private labelHtmlElement: HTMLLabelElement;
  private optionsContainer: HTMLDivElement;
  private static count: number = 0;
  private id: string;
  private props: CheckboxGroupFieldProps;

  public htmlElement: HTMLDivElement;

  constructor(props: CheckboxGroupFieldProps) {
    CheckboxGroupField.count += 1;
    this.props = props;
    this.htmlElement = document.createElement('div');
    this.optionsContainer = document.createElement('div');
    this.id = `CheckboxGroupField_${CheckboxGroupField.count}`;
    this.labelHtmlElement = document.createElement('label');
    
    this.initialize();
    this.renderView();
  };

  private static createCheckbox = ({
    name,
    id,
    value,
    checked,
  }: { name: string, id: string, value: string, checked: boolean }) => {
    const checkboxHtmlElement = document.createElement('input');
    checkboxHtmlElement.type = 'checkbox';
    checkboxHtmlElement.id = id;
    checkboxHtmlElement.name = name;
    checkboxHtmlElement.value = value;
    checkboxHtmlElement.className = 'form-check-input';
    checkboxHtmlElement.checked = checked;

    return checkboxHtmlElement;
  };

  private static createOptionLabel = ({
    htmlFor,
    innerHTML,
  }: { htmlFor: string, innerHTML: string }) => {
    const labelHtmlElement = document.createElement('label');
    labelHtmlElement.className = 'form-check-label';
    labelHtmlElement.innerHTML = innerHTML;
    labelHtmlElement.setAttribute('for', htmlFor);

    return labelHtmlElement;
  };

  private initialize() {
    this.htmlElement.append(
      this.labelHtmlElement,
      this.optionsContainer
    );
  };

  private renderView() {
    const { name, options, selected } = this.props;

    this.optionsContainer.innerHTML = '';
    options.forEach((option) => {
      const optionId = `${this.id}_${option.value}`;

      const checkboxFieldHtmlElement = document.createElement('div');
      checkboxFieldHtmlElement.className = 'form-check';

      const checkboxHtmlElement = CheckboxGroupField.createCheckbox({
        name,
        id: optionId,
        value: option.value,
        checked: Boolean(selected && selected.includes(option)),
      });

      const labelHtmlElement = CheckboxGroupField.createOptionLabel({
        htmlFor: optionId,
        innerHTML: option.label,
      });

      checkboxFieldHtmlElement.append(
        checkboxHtmlElement,
        labelHtmlElement,
      );

      this.optionsContainer.appendChild(checkboxFieldHtmlElement);
    });
  };


  updateProps(props: Partial<CheckboxGroupFieldProps>) {
    this.props = {
      ...props,
      ...this.props,
    }
    this.renderView();
  }
}

export default CheckboxGroupField;