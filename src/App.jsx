import "bootstrap/dist/css/bootstrap.min.css";
import ThemeProvider from "react-bootstrap/ThemeProvider";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Watchlist from "./components/Watchlist";
import Watched from "./components/Watched";
import AddNew from "./components/AddNew";
import Header from "./components/Header";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <Container fluid>
        <Row>
          <Router>
            <Header />
            <Routes>
              <Route exact path="/" element={<Watchlist />}></Route>
              <Route exact path="/watched" element={<Watched />}></Route>
              <Route exact path="/add" element={<AddNew />}></Route>
            </Routes>
          </Router>
        </Row>
      </Container>
    </GlobalProvider>
  );
}

export default App;
