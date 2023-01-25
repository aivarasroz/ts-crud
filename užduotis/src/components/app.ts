import CarsCollection from '../helpers/cars-collection';
import cars from '../data/cars';
import models from '../data/models';
import brands from '../data/brands';
import Table from './table';
import stringifyProps, { StringifyObjectProps } from "../helpers/stringify-object";
import CarJoined from '../types/car-joined';
import SelectField from './select-field';

class App {
  private carsCollection: CarsCollection;

  private selectedBrandId: null | string;

  private brandSelect: SelectField

  private carTable: Table<StringifyObjectProps<CarJoined>>;

  private htmlElement: HTMLElement;

  public constructor(selector: string) {
    const foundElement = document.querySelector<HTMLElement>(selector);
    if (foundElement === null) throw new Error(`element by sector - not found. '${selector}'`);

    this.carsCollection = new CarsCollection({ cars, brands, models });
    this.carTable = new Table({
      title: 'All Vehicle',
      columns: {
        id: 'Id',
        brand: 'brand',
        model: 'model',
        price: 'Price',
        year: 'Year',
      },
      rowsData: this.carsCollection.all.map(stringifyProps),
      onDelete: this.handleCarDelete,
    });
    this.brandSelect = new SelectField({
      labelText: 'Choose Brand',
      options: brands.map(({ id, title }) => ({ title, value: id })),
      onChange: this.handleBrandChange
    });
    this.selectedBrandId = null;

    this.htmlElement = foundElement;

    this.initialize();
  }

  private handleBrandChange = (brandId: string): void  => {
    this.selectedBrandId = brandId;

    this.update();
  }
  private handleCarDelete = (carId: string): void => {
    this.carsCollection.deleteCarById(carId);

    this.update();
  }

  private update = (): void => {
    const { selectedBrandId, carsCollection } = this;

    if (selectedBrandId === null) {
      this.carTable.updateProps({
        title: 'All Vehicles',
        rowsData: carsCollection.all.map(stringifyProps),
      });
    } else {
      const brand = brands.find(b => b.id === selectedBrandId);
      if (brand === undefined) throw new Error('Non-Existant Brand was chosen!');

      this.carTable.updateProps({
        title: `Filtered only :${brand.title} brand`,
        rowsData: carsCollection.getByBrandId(selectedBrandId).map(stringifyProps),
      });
    }
  }
  
  public initialize = (): void => {
    const container = document.createElement('div');
    container.className = 'container my-4 d-flex  flex-column gap-3';
    container.append(
      this.brandSelect.htmlElement,
      this.carTable.htmlElement
    );

    this.htmlElement.append(container);
  };
}

export default App;
