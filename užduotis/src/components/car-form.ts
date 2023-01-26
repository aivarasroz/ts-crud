import TextField from "./text-field";
import SelectField from "./select-field";

type CarFormProps = {
  model: string,
  brand: string,
  price: string,
  year: string,
  onSubmit: (values: string) => void,
  submitBtnText: string
}

class CarForm {
  private props: CarFormProps;
  private brand: SelectField;
  private model: SelectField;
  private price: TextField;
  private years: TextField;

  private htmlFormHeader: HTMLHeadingElement;
  private htmlFieldsContainer: HTMLDivElement;
  private htmlsubmitBtnText: HTMLButtonElement;

  public htmlElement: HTMLFormElement;
  
  // TODO private heading  and submitbutton : HTMLHeading and HTMLBUTTONelelenr ir perkelt i constructoriu
  // su this. = doc createle('').

  // TODO  3.1 turi tureti private ivesties laukus.
  // TODO jas reikia sukurto construcotriuje 
  constructor (props: CarFormProps) {
    this.props = props

    this.htmlElement = document.createElement( ' form');


    //TRODO heading html element

    // TODO implementuoti initialize ir renderview metoda
    // TODO visos naujos NEW savybes ({ labeltext - pavadinimas, name- title, value - string: ( props.values?.title) ?? ' ' , ... })

    // Checklist  savybeje options su masyvu. 



  }

  initialize() {

    //TODO ideti html classiu this.htmlElement.className = ' shadow p3

    //TODO thishtmllemenr.append ( this. fields.) + this.heading + submitbutton

    //TODO this heading, submitbutton.typ ir classname = '...'

    //TODO add event listenenr ideti su this.htmlelemenr + preventDefault  + new kintamasis form Data = New FormData (this.html element) + kintamasis title = ofrmdata.get('title') + props.onSubmit(). sukur if (typeof title !== 'string;) { alert pavadinimas: return}, dar viena if su price, ir su description, + itraukti categfories kintamaji  su .getAll


    //TODO kintamasis values : Values (importas is kitur) { title, price: Number(price), categories, description}

    //TODO this.props.onsubmit(values), this.htmlelement.reset()


  }

  renderView() {
    // TODO headin irr submitbutton . innerhtml  = this.props.title ir submitbtntxt

    // TODO if ( this.porps.values?.title)  { this. fieldai . updateprops( grazina value: this....)} visasi atvejais if
    // TODO categories veiksme vietoj value: - Selected:


  }

  updateProps() {
    // TODO props partial veiksmas 
    // TODO implementuoto this. renderview

    // visus propsus objekte su spread operator
  }

}

export default CarForm