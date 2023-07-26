import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { fetchPosts } from './store/reducers/ActionCreators';

import SearchPanel from './components/SearchPanel/SearchPanel';
import Table from './components/Table/Table';
import Navigation from './components/Navigation/Navigation';

const App = () => {


  return (
    <div className="App">
      <SearchPanel />
      <Table />
      < Navigation />
    </div>
  );
}

export default App;
