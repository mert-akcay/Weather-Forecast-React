import './App.css';
import {DataProvider} from './contexts/DataContext'
import {CoordsDataProvider} from './contexts/CoordsDataContext'
import MainData from './components/MainData'
import FilteredData from './components/FilteredData'


function App() {
  return (
    <DataProvider>
      <CoordsDataProvider>  
          <FilteredData/>
          <MainData/>
      </CoordsDataProvider>
    </DataProvider>
  );
}

export default App;
