type TableProps<Type> = {
  title: string,
  columns: Type,
  rowsData: Type[],
};


class Table<Type> {
  public htmlElement: HTMLTableElement;
  private props: TableProps<Type>;
  private tbody: HTMLTableSectionElement;
  private thead: HTMLTableSectionElement;

  constructor(props: TableProps<Type>) {
    this.props = props;
    this.thead = document.createElement('thead');
    this.tbody = document.createElement('tbody');
    this.htmlElement = document.createElement('table');
    this.initialize();
  }


  private initialize = (): void => {
    this.htmlElement.className = 'table table-striped order border p-3';
    this.htmlElement.append(
      this.thead,
      this.tbody);};
}
