import { IPost } from "../../models/IPost";

interface ITableRowProps {
  post: IPost;
}

const TableRow = ({ post }: ITableRowProps) => {
  return (
    <tr>
      <td>{post.id}</td>
      <td>{post.title}</td>
      <td>{post.body}</td>
    </tr>
  );
}

export default TableRow;
