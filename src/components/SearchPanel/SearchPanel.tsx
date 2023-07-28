import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { changeSearchQuery } from "../../store/reducers/SortSlice";


const SearchPanel = () => {
  const dispatch = useAppDispatch()
  const searchQuery = useAppSelector(state => state.sortReducer.searchQuery);

  function handleSearch(event: React.ChangeEvent<HTMLInputElement>) {
    dispatch(changeSearchQuery(event.target.value)); 
  }
  
  return (
    <div>
      <input type="text" onChange={handleSearch} value={searchQuery} />
    </div>
  );
}

export default SearchPanel;


