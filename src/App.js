import bg from "./assets/bg2.jpg";
import "./App.css";
import Header from "./components/Header";
import Layout from "./components/Layout";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header title="This is Title" descr="This is Description" />
      <Layout urlBg={bg} title="This is Title layout 1" />
      <Layout colorBg="red" title="This is Title layout 2" />
      <Layout urlBg={bg} title="This is Title layout 3" />
      <Footer />
    </>
  );
}

export default App;
