export type Options {
}


export type CheckboxGroupFieldProps = {
  labelText: string;
  name: string;
  options: Array<{ label: string, value: string}>;
  selected?: Array<{ label: string, value: string}>
}


class TextField {
  // TODO: prideti privacia statine savybe count += 1 ()
  //TODO sukurti papildoma elementa  optiosns Contianer
  private props: CheckboxGroupFieldProps;

  public htmlElement: HTMLDivElement;

  constructor(props: CheckboxGroupFieldProps) {
    this.props = props;
    this.htmlElement = document.createElement('div')
    //TODO sukurti papildoma elementa  optiosns Contianer
    //TODO kvieciam initialize ir rendervieew constructor.

    //TODO viskas kas priklauso nuo prpsu yra renderView 

    //TODO kad abu metodai pasiektu lable ir input , reikia kurti pries kosntruktoriu bendrus kintamuosius, ir priskirti const === this.
  }


  initialize() {
    // ,this. label . htmlFor + this.id
    // Label - class name nustatyti + ideti innerHTML

    // TODO: appendint htmlElement su label 

    //TODO sukurti papildoma elementa  optiosnsContianer 
  

  }

  renderView() {
  //TODO: pagal gautus  optionus suformuoti:

  /*
  <div>
     <label...>
     <input type="checkbox" ...>
  </div>

   */


  //TODO kintamasis si optionais this.optionscontainer.innerhtml = this.props.options + susaistymas (map (({ label, value} ) => itruakti checkbox div form bootstrap + kur tekstas matosi &{label}))
  //TODO + join su tarpu  
  //TODO visa optionView kintamajai ideti i htmlElement.innerHMTL iteruojant '+='
  // map viduje  const optionid = this. id +value
  // return ` booststrap div elementai` ideti i for = optionId .
  // i div  name itruakti this.props.name
  }


  updateProps() {
    // TODO aprasyti dalini tipa props metodo parametru skiltyje su generic type.
    // TODO atnaujina propsus kai objekru struturoje yra spread elementas this.props ir props.
    // TODO po objekto  kvieciam renderview.
  }

}

export default TextField;