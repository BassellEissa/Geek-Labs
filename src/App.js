import './App.css';
import Filters from './components/Filters/Filters';
import Table from './components/table/Table';
import Heading from './components/Heading/Heading';
import ExpandableMenu from './components/Menu/Menu';

function App() {
  return (
    <div className="App">
      <div className="row">
        <div className='col-1'>
          <ExpandableMenu />
        </div>
        <div className="col-8">
          <Heading />
          <Table />
        </div>
        <div className="col-3">
          <Filters />
        </div>

      </div>

    </div>
  );
}

export default App;
