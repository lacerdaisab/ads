import Header from "./components/header";
import ListarTarefa from "./pages/tarefa/ListarTarefa";
import Login from "./pages/login/index.jsx";

function App() {
  return (
    <div className="App">
      <Header />
      <ListarTarefa />
      {/* <Login /> */}
    </div>
  );
}

export default App;
