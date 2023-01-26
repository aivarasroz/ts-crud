import TextField from "./text-field";
import SelectField from "./select-field";
import brands from '../data/brands';
import models from '../data/models';

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


  constructor (props: CarFormProps) {
    this.props = props

    this.htmlElement = document.createElement('form');
    this.htmlFormHeader = document.createElement('h3');
    this.htmlFieldsContainer = document.createElement('div');
    this.htmlsubmitBtnText = document.createElement('button');

    this.brand = new SelectField({
      name: 'brand',
      labelText: 'Car brand',
      options: brands.map(({ id, title }) => ({ title, value: id })),
    });

    this.model = new SelectField({
      name: 'model',
      labelText: 'Car Model',
      options: models.map(({ id, title }) => ({ title, value: id })),
    });

    this.price = new TextField({
      name: 'price',
      labelText: 'Car Price',
    });

    this.years = new TextField({
      name: 'year',
      labelText: 'Car Year',
    }),

    this.initialize();
    this.renderView();
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