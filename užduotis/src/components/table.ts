

type RowData = {
  id: string,
  [key: string]: string,
};

export type TableProps<Type> = {
  title: string,
  columns: Type,
  rowsData: Type[],
  onDelete: (id: string) => void,
  onEdit: (id: string) => void,
  editedCarId: string | null,
};

class Table<Type extends RowData> {

  private props: TableProps<Type>;

  private tbody: HTMLTableSectionElement;

  private thead: HTMLTableSectionElement;

  public htmlElement: HTMLTableElement;

  public constructor(props: TableProps<Type>) {
    this.props = props;


    this.htmlElement = document.createElement('table');
    this.thead = document.createElement('thead');
    this.tbody = document.createElement('tbody');

    this.initialize();
    this.renderView();
  }


  private initialize = (): void => {
    this.htmlElement.className = 'table table-striped order border p-3';
    this.htmlElement.append(
      this.thead,
      this.tbody,
    );
  };

  private renderView = (): void => {
    this.renderHeadView();
    this.renderBodyView();
  };

  private renderHeadView = (): void => {
    const { title, columns } = this.props;

    const headersArray = Object.values(columns);
    const headersRowHtmlString = headersArray.map((header) => `<th>${header}</th>`).join('');

    this.thead.innerHTML = `
      <tr>
        <th colspan="${headersArray.length}" class="text-center h3">${title}</th>
      </tr>
      <tr>${headersRowHtmlString}</tr>`;
  };

  private renderBodyView = (): void => {
    const { rowsData, columns, editedCarId } = this.props;

    this.tbody.innerHTML = '';
    const rowsHtmlElements = rowsData
      .map((rowData) => {
        const rowHtmlElement = document.createElement('tr');
        if (editedCarId === rowData.id) {
          rowHtmlElement.style.backgroundColor = '#C29FCF';
        }

        const cellsHtmlString = Object.keys(columns)
          .map((key) => `<td>${rowData[key]}</td>`)
          .join(' ');

        rowHtmlElement.innerHTML = cellsHtmlString;

        this.addActionsCell(rowHtmlElement, rowData.id);

        return rowHtmlElement;
      });

    this.tbody.append(...rowsHtmlElements);
  };

  private addActionsCell = (rowHtmlElement: HTMLTableRowElement, id: string): void => {
    const { onDelete, onEdit, editedCarId } = this.props;

    const buttonCell = document.createElement('td');
    buttonCell.className = 'd-flex justify-content-center gap-3'

    const isCancelButton = editedCarId === id;
    const updateButton = document.createElement('button');
    updateButton.type = 'button';
    updateButton.innerHTML = isCancelButton ? 'Cancel' : 'Update Car';
    updateButton.className = `btn btn-${isCancelButton ? 'dark' : 'info'}`;
    updateButton.style.width = '40 px';
    updateButton.addEventListener('Click', () => onEdit(id));



    const deleteButton = document.createElement('button');
    deleteButton.type = 'button';
    deleteButton.innerHTML = 'Delete';
    deleteButton.className = 'btn btn-danger';
    deleteButton.addEventListener('click', () => onDelete(id));
    deleteButton.style.width = '80px';

    buttonCell.append(
      deleteButton,
      updateButton
      );
    rowHtmlElement.append(buttonCell);
  };

  public updateProps = (newProps: Partial<TableProps<Type>>): void => {
    this.props = {
      ...this.props,
      ...newProps
    };

    this.renderView();
  }
}

export default Table;
