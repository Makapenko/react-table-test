import { useEffect } from "react";
import { useAppDispatch } from "../../hooks/redux";
import styles from './Table.module.scss'
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";
import { fetchPosts } from "../../store/reducers/ActionCreators";
import { useSelector } from "react-redux";
import { filteredPostsSelector } from "../../store/selectors";

const Table: React.FC = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchPosts())
  }, [dispatch])

  const posts = useSelector(filteredPostsSelector)

  return (
    <table className={styles.table}>
      <TableHeader />
      <tbody>
        { posts.map((post, index) => (
          <TableRow key={index} post={post} />
        ))}
      </tbody>
    </table>
  );
}

export default Table;
