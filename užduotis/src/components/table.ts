type RowData = {
  id: string,
  [key: string]: string,
};

type TableProps<Type> = {
  title: string,
  columns: Type,
  rowsData: Type[],
};


class Table<Type extends RowData> {
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

  private initializethead = (): void => {
    const {columns, title} = this.props;
    const theadArr = Object.values(columns);
    const headersRowHtmlString = theadArr.map((header) => `<th>${header}</th>`).join('');
    this.thead.innerHTML = `
      <tr>
        <th colspan="${theadArr.length}" class="text-center h3">${title}</th>
      </tr>
      <tr>${headersRowHtmlString}</tr>
    `;
  }

  private initializeBody = (): void => {
    const { rowsData, columns } = this.props;

    this.tbody.innerHTML = '';
    const rowsHtmlElements = rowsData
      .map((rowData) => {
        const rowHtmlElement = document.createElement('tr');

        const cellsHtmlString = Object.keys(columns)
          .map((key) => `<td>${rowData[key]}</td>`)
          .join(' ');

        rowHtmlElement.innerHTML = cellsHtmlString;

        return rowHtmlElement;
      });

    this.tbody.append(...rowsHtmlElements);
  };

  public updateProps = (newProps: Partial<TableProps<Type>>): void => {
    this.props = {
      ...this.props,
      ...newProps
    };
  }

  private initialize = (): void => {
    this.initializeBody();
    this.initializethead();
    this.htmlElement.className = 'table table-striped order border p-3';
    this.htmlElement.append(
      this.thead,
      this.tbody);};

      
}
export default Table