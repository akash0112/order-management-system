import "./App.css";
import Navbar from "./components/Navbar";
import AddEditOrder from "./pages/AddEditOrder";
import Table from "./pages/Table";

function App() {
  return (
    <>
      <Navbar />
      <div className="row">
        <div className="col-md-4">
          <AddEditOrder />
        </div>
        <div className="col-md-6">
          <Table />
        </div>
      </div>
    </>
  );
}

export default App;
