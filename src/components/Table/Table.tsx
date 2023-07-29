import { useEffect } from "react";
import { useAppDispatch } from "../../hooks/redux";

import TableHeader from "./TableHeader";
import TableRow from "./TableRow";

import styles from './Table.module.scss'

import { fetchPosts } from "../../store/reducers/ActionCreators";
import { useSelector } from "react-redux";
import { filteredPostsSelector } from "../../store/selectors";

const Table: React.FC = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchPosts())
  }, [])

  const posts = useSelector(filteredPostsSelector)

  return (
    <table className={styles.table}>
      <TableHeader />
      <tbody>
        {posts.map(post => (
          <TableRow key={post.id} post={post} />
        ))}
      </tbody>
    </table>
  );
}

export default Table;
