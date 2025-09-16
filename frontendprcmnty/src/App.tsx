import DataTable from "components/DataTable";
import Footer from "components/Footer";
import NavBar from "components/NavBar";


function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <h1 className="text-primary">DashBord de Processamentos ultimos 7 dias</h1>

        <DataTable />
      </div>


      <Footer />
    </>
  );
}

export default App;
