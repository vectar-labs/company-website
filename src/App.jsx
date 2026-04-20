import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";

function App() {
  return (
    <>
      {/* header- navigation bar */}
      <section className="w-full min-h-screen">
        {/* navbar */}
        <Navbar />
        <Home />
      </section>
    </>
  );
}

export default App;
