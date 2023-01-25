import CarsCollection from '../helpers/cars-collection';
import cars from '../data/cars';
import models from '../data/models';
import brands from '../data/brands';
import Table from './table';
import stringifyProps, { StringifyObjectProps } from "../helpers/stringify-object";
import CarJoined from '../types/car-joined';
import SelectField from './select-field';

class App {
  private htmlElement: HTMLElement;

  private carsCollection: CarsCollection;

  private selectedBrandId: null | string;

  private brandSelect: SelectField

  private tableCars: Table<StringifyObjectProps<CarJoined>>;


  public constructor(selector: string) {
    const foundElement = document.querySelector<HTMLElement>(selector);
    
    this.carsCollection = new CarsCollection({models, brands, cars});

    if (foundElement === null) throw new Error(`Selector is not found.'${selector}'`);

    this.htmlElement = foundElement;

    this.brandSelect = new SelectField({
      labelText: 'Markė',
      options: brands.map(({ id, title }) => ({ title, value: id })),
      onChange: this.handleBrandChange
    });
    this.selectedBrandId = null;

    this.tableCars = new Table({
      title: 'Vehicles for Sale',
      columns: {
        id: 'id',
        brand: 'Brand',
        model: 'Model',
        year: 'Year',
        price: 'Price'
      },
      rowsData: this.carsCollection.all.map(stringifyProps),
    })
    
  }
  private handleBrandChange = (brandId: string): void  => {
    this.selectedBrandId = brandId;

    this.update();
  }

  public initialize = (): void => {
    const container = document.createElement('div');
    container.className = 'container my-4 d-flex  flex-column gap-3';
    container.append(
      this.brandSelect.htmlElement,
      this.tableCars.htmlElement
    );

    this.htmlElement.append(container);
  };
  private update = (): void => {
    const { selectedBrandId, carsCollection } = this;

    if (selectedBrandId === null) {
      this.tableCars.updateProps({
        title: 'Visi automobiliai',
        rowsData: carsCollection.all.map(stringifyProps),
      });
    } else {
      const brand = brands.find(b => b.id === selectedBrandId);
      if (brand === undefined) throw new Error('Pasirinkta neegzistuojanti markė');

      this.tableCars.updateProps({
        title: `${brand.title} markės automobiliai`,
        rowsData: carsCollection.getByBrandId(selectedBrandId).map(stringifyProps),
      });
    }
  }
  
}

export default App;
