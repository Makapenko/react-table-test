import { changePage } from '../../store/reducers/SortSlice';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { Link, NavLink, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import styles from './Navigation.module.scss'

const Navigation: React.FC = () => {
  const { page } = useParams();
  const dispatch = useAppDispatch();
  const currentPage = useAppSelector(state => state.sortReducer.currentPage);

  useEffect(() => {
    if (page != null) {
      dispatch(changePage(parseInt(page)));
    }
  }, [dispatch, page])

  const links = Array.from({ length: 5 }, (_, i) => i + 1);

  const prevButtonDisabled = currentPage === 1 ? styles.disabled : styles.enabled;
  const nextButtonDisabled = currentPage === 5 ? styles.disabled : styles.enabled;

  return (
    <nav className={styles.nav}>
      <Link to={`/page/${currentPage - 1}`} className={prevButtonDisabled}>Назад</Link>
      <div className={styles.pagesLink}>
        {links.map(link => (
          <NavLink key={link} to={`/page/${link}`} className={({isActive}) => (isActive ? styles.activePage : styles.page)} >{link}</NavLink>
        ))}
      </div>
      <Link to={`/page/${currentPage + 1}`} className={nextButtonDisabled}>Далее</Link>
    </nav>
  );
}

export default Navigation;
