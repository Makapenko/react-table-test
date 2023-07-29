import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { updateSort } from "../../store/reducers/SortSlice";
import styles from './TableHeader.module.scss'
import { IPost } from "../../models/IPost";
import { IColumn } from "../../models/IColumn";
import SortArrowIcon from "../icons/SortArrowIcon";

const columns: IColumn[] = [
  { key: 'id', label: 'ID' },
  { key: 'title', label: 'Заголовок' },
  { key: 'body', label: 'Описание' },
];

const TableHeader: React.FC = () => {
  const dispatch = useAppDispatch()



  const { sortBy, sortDirection } = useAppSelector(state => state.sortReducer)

  function handleSortData(key: keyof IPost) {
    dispatch(updateSort({ sortBy: key, sortDirection: sortBy === key && sortDirection === 'ascending' ? 'descending' : 'ascending' }));
  }

  return (
    <thead>
      <tr className={styles.tr}>
        {columns.map(column => (
          <th key={column.key} onClick={() => handleSortData(column.key)} className={styles.th}>
            {column.label}
            {sortBy === column.key && (
             <span className={`${styles.arrowIconContainer} ${sortDirection === 'descending' ? styles.arrowIconContainerReversed : ''}`}>
             <SortArrowIcon />
           </span>
            )}
          </th>
        ))}
      </tr>
    </thead>
  );
}

export default TableHeader;
