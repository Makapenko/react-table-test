import styles from './TableRow.module.scss'
import { IPost } from "../../models/IPost";

interface ITableRowProps {
  post: IPost;
}

const TableRow: React.FC<ITableRowProps> = ({ post }) => {

  return (
    <tr className={styles.tr} >
      <td className={styles.tdId}>{post.id}</td>
      <td className={styles.tdTitle}>{post.title}</td>
      <td className={styles.tdBody}>{post.body}</td>
    </tr>
  );
}

export default TableRow;
