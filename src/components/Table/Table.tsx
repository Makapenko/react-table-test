import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";

import TableHeader from "./TableHeader";
import TableRow from "./TableRow";

import { fetchPosts } from "../../store/reducers/ActionCreators";

const Table = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchPosts())
    }, [])
    
  const { posts } = useAppSelector(state => state.postReducer)

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
