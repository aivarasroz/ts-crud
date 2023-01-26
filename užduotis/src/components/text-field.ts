export type TextFieldProps = {
  labelText: string;
  initialValue?: string;
  name: string;

}


class TextField {

  private static count: number = 0
  private props: TextFieldProps;

  public htmlElement: HTMLDivElement;

  private labelHtmlElement: HTMLLabelElement;
  private inputHtmlElement: HTMLInputElement;

  constructor(props: TextFieldProps) {
    TextField.count += 1;
    
    this.props = props;

    this.htmlElement = document.createElement('div');
    this.labelHtmlElement = document.createElement('label');
    this.inputHtmlElement = document.createElement('input');

    //TODO kvieciam initialize ir rendervieew constructor.

    //TODO viskas kas priklauso nuo prpsu yra renderView 

    //TODO kad abu metodai pasiektu lable ir input , reikia kurti pries kosntruktoriu bendrus kintamuosius, ir priskirti const === this.


  }


  initialize() {
    // TODO: sukurti label and input , kuriant htmlelement
    // Label - class name nustatyti + ideti innerHTML

    // TODO: appendint htmlElement su label ir input
    // TODO: irasyti atributa for (htmlFor(pirmas parametras : pavadinimas, antras - reiksme)

  }

  renderView() {
    //TODO priskirti input value air label name === props.. keiciant input/label(labeltext++)
  }


  updateProps() {
    // TODO aprasyti dalini tipa props metodo parametru skiltyje su generic type.
    // TODO atnaujina propsus kai objekru struturoje yra spread elementas this.props ir props.
    // TODO po objekto  kvieciam renderview.
  }

}

export default TextField;