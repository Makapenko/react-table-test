import { changePage } from '../../store/reducers/SortSlice';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { Link, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import styles from './Navigation.module.css'

const Navigation = () => {
  const { page } = useParams();
  const dispatch = useAppDispatch();
  const currentPage = useAppSelector(state => state.sortReducer.currentPage);

  useEffect(() => {
    if (page != null) {
      dispatch(changePage(parseInt(page)));
    }
  }, [dispatch, page])

  const links = Array.from({ length: 5 }, (_, i) => i + 1);

  // Определяем, должны ли кнопки быть неактивными
  const prevButtonDisabled = currentPage === 1 ? styles.disabled : '';
  const nextButtonDisabled = currentPage === 5 ? styles.disabled : '';

  return (
    <nav>
      <Link to={`/page/${currentPage - 1}`} className={prevButtonDisabled}>Назад</Link>
      {links.map(link => (
        <Link key={link} to={`/page/${link}`}>{link}</Link>
      ))}
      <Link to={`/page/${currentPage + 1}`} className={nextButtonDisabled}>Далее</Link>
    </nav>
  );
}

export default Navigation;
