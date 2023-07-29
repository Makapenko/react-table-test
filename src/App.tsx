import styles from './App.module.scss';
import SearchPanel from './components/SearchPanel/SearchPanel';
import Table from './components/Table/Table';
import Navigation from './components/Navigation/Navigation';

const App: React.FC = () => {


  return (
    <div className={styles.container}>
      <SearchPanel />
      <Table />
      <Navigation />
    </div>
  );
}

export default App;
