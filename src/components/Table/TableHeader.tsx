import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { postsUpdateDirection } from "../../store/reducers/PostSlice";
import { IPost } from "../../models/IPost";
import { IColumn } from "../../models/IColumn";
import { ISortConfig } from "../../models/ISortingConfig";

const TableHeader = () => {
  const dispatch = useAppDispatch()
  
  const columns: IColumn[] = [
    { key: 'id', label: 'ID' },
    { key: 'title', label: 'Заголовок' },
    { key: 'body', label: 'Описание' },
  ];

  const { posts } = useAppSelector(state => state.postReducer)

  
  const [sortConfig, setSortConfig] = useState<ISortConfig>({ key: null, direction: null });

  function sortData(key: keyof IPost) {
    const direction = sortConfig.key === key && sortConfig.direction === 'ascending'
      ? 'descending'
      : 'ascending';
    const sortedData = [...posts].sort((a, b) => {
      const valueA = a[key];
      const valueB = b[key];
      if (valueA < valueB) {
        return direction === 'ascending' ? -1 : 1;
      }
      if (valueA > valueB) {
        return direction === 'ascending' ? 1 : -1;
      }
      return 0;
    });
    dispatch(postsUpdateDirection(sortedData));
    setSortConfig({ key, direction });
  }

  return (
    <thead>
      <tr>
        {columns.map(column => (
          <th key={column.key} onClick={() => sortData(column.key)}>
            {column.label}
            {sortConfig.key === column.key && (
              <span>{sortConfig.direction === 'ascending' ? ' ▲' : ' ▼'}</span>
            )}
          </th>
        ))}
      </tr>
    </thead>
  );
}

export default TableHeader;
