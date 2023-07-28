import { changePage } from '../../store/reducers/SortSlice';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';

const Navigation = () => {
  const dispatch = useAppDispatch();
  const currentPage = useAppSelector(state => state.sortReducer.currentPage);

  function handlePageChange(newPage: number) {
    dispatch(changePage(newPage));
  }

  return (
    <nav>
      <ul>
      <li>
          <button onClick={() => handlePageChange(currentPage - 1)}>Ласт</button>
        </li>
        <li>
          <button onClick={() => handlePageChange(1)}>1</button>
        </li>
        <li>
          <button onClick={() => handlePageChange(2)}>2</button>
        </li>
        <li>
          <button onClick={() => handlePageChange(3)}>3</button>
        </li>
        <li>
          <button onClick={() => handlePageChange(currentPage - 1)}>Некст</button>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
