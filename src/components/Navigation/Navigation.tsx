import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link, NavLink, useNavigate, useParams } from 'react-router-dom';
import styles from './Navigation.module.scss'
import { changePage } from '../../store/reducers/SortSlice';
import { useAppDispatch } from '../../hooks/redux';
import { currentPageSelector } from '../../store/selectors';

const Navigation: React.FC = () => {
  const { page } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const currentPage = useSelector(currentPageSelector);

  useEffect(() => {
    if (page != null) {
      if (parseInt(page) > 5 || parseInt(page) < 1) {
        navigate('./page/1');
      } else {
        dispatch(changePage(parseInt(page)));
      }
    }
  }, [dispatch, page, navigate])

  const links = Array.from({ length: 5 }, (_, i) => i + 1);

  const prevButtonDisabled = currentPage === 1 ? styles.disabled : styles.enabled;
  const nextButtonDisabled = currentPage === 5 ? styles.disabled : styles.enabled;

  return (
    <nav className={styles.nav}>
      <Link to={`./page/${currentPage - 1}`} className={prevButtonDisabled}>Назад</Link>
      <div className={styles.pagesLink}>
        {links.map(link => (
          <NavLink key={link} to={`./page/${link}`} className={({ isActive }) => (isActive ? styles.activePage : styles.page)} >{link}</NavLink>
        ))}
      </div>
      <Link to={`./page/${currentPage + 1}`} className={nextButtonDisabled}>Далее</Link>
    </nav>
  );
}

export default Navigation;
