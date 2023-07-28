import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { updateSort } from "../../store/reducers/SortSlice";
import { IPost } from "../../models/IPost";
import { IColumn } from "../../models/IColumn";

const columns: IColumn[] = [
  { key: 'id', label: 'ID' },
  { key: 'title', label: 'Заголовок' },
  { key: 'body', label: 'Описание' },
];

const TableHeader = () => {
  const dispatch = useAppDispatch()



  const { sortBy, sortDirection } = useAppSelector(state => state.sortReducer)

  function handleSortData(key: keyof IPost) {
    dispatch(updateSort({ sortBy: key, sortDirection: sortBy === key && sortDirection === 'ascending' ? 'descending' : 'ascending' }));
  }

  return (
    <thead>
      <tr>
        {columns.map(column => (
          <th key={column.key} onClick={() => handleSortData(column.key)}>
            {column.label}
            {sortBy === column.key && (
              <span>{sortDirection === 'ascending' ? ' ▲' : ' ▼'}</span>
            )}
          </th>
        ))}
      </tr>
    </thead>
  );
}

export default TableHeader;
