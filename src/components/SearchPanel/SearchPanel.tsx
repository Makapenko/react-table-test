import { useRef } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { changeSearchQuery } from "../../store/reducers/SortSlice";
import SearchIcon from "../icons/SearchIcon";
import styles from './SearchPanel.module.scss'

const SearchPanel: React.FC = () => {
  const dispatch = useAppDispatch()
  const searchQuery = useAppSelector(state => state.sortReducer.searchQuery);
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


