import CarsCollection from '../helpers/cars-collection';
import cars from '../data/cars';
import models from '../data/models';
import brands from '../data/brands';
import Table from './table';
import stringifyProps from "../helpers/stringify-object";

class App {
  private htmlElement: HTMLElement;

  private carsCollection: CarsCollection;


  constructor(selector: string) {
    const foundElement = document.querySelector<HTMLElement>(selector);
    
    this.carsCollection = new CarsCollection({models, brands, cars});

    if (foundElement === null) throw new Error(`Selector is not found.'${selector}'`);

    this.htmlElement = foundElement;
  }

  initialize = (): void => {
    const tableCars = new Table({
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
    const container = document.createElement('div');
    container.className = 'container my-5';
    container.appendChild(tableCars.htmlElement);

    this.htmlElement.append(container);
  };
}

export default App;
