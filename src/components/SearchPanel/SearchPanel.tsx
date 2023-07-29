import { useRef } from "react";
import { useSelector } from "react-redux";
import styles from './SearchPanel.module.scss'
import { useAppDispatch } from "../../hooks/redux";
import { changeSearchQuery } from "../../store/reducers/SortSlice";
import SearchIcon from "../icons/SearchIcon";
import { searchQuerySelector } from "../../store/selectors";

const SearchPanel: React.FC = () => {
  const dispatch = useAppDispatch()
  const searchQuery = useSelector(searchQuerySelector);
  const inputRef = useRef<HTMLInputElement>(null);

  function handleSearch(event: React.ChangeEvent<HTMLInputElement>) {
    dispatch(changeSearchQuery(event.target.value));
  }

  function handleIconClick() {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }

  return (
    <div className={styles.searchBar}>
      <input
        type="text"
        placeholder="Поиск"
        onChange={handleSearch}
        value={searchQuery}
        className={styles.searchInput}
        ref={inputRef}
      />
      <div className={styles.searchIcon} onClick={handleIconClick}>
        <SearchIcon />
      </div>
    </div>
  );
}

export default SearchPanel;


