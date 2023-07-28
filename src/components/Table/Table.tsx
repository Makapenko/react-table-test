import { useEffect } from "react";
import { useAppDispatch } from "../../hooks/redux";

import TableHeader from "./TableHeader";
import TableRow from "./TableRow";

import { fetchPosts } from "../../store/reducers/ActionCreators";
import { useSelector } from "react-redux";
import { postSelector } from "../../store/selectors";

const Table = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchPosts())
  }, [])

  const posts = useSelector(postSelector)

  return (
    <table>
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
