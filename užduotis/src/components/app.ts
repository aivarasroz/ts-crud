import CarsCollection from '../helpers/cars-collection';
import cars from '../data/cars';
import models from '../data/models';
import brands from '../data/brands';

class App {
  private htmlElement: HTMLElement;

  private carsCollection: CarsCollection;


  constructor(selector: string) {
    const foundElement = document.querySelector<HTMLElement>(selector);
    
    this.carsCollection = new CarsCollection({models, brands, cars});

    if (foundElement === null) throw new Error(`Nerastas elementas su selektoriumi '${selector}'`);

    this.htmlElement = foundElement;
  }

  initialize = (): void => {
    const container = document.createElement('div');
    container.className = 'container my-5';
    container.innerHTML = 'Laukiu kol būsiu sukurtas';

    this.htmlElement.append(container);
  };
}

export default App;
