// Bringing in the required import from 'react-router-dom'
import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";

function App() {
  const page = useLocation().pathname;
  // The Outlet component will conditionally swap between the different pages according to the URL
  return (
    <>
      <Header page={page} />
      <></>
      <main>
        <Outlet />
      </main>
      <></>
      <Footer />
    </>
  );
}

export default App;
