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
}
