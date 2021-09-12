import bg from "./assets/bg2.jpg";
import "./App.css";
import Header from "./components/Header";
import Layout from "./components/Layout";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header title="This is Title" descr="This is Description" />
      <Layout
        urlBg={bg}
        title="This is Title layout 1"
        descr="This is Description 1"
        colorBg=""
      />
      <Layout
        urlBg=""
        colorBg="red"
        title="This is Title layout 2"
        descr="This is Description 2"
      />
      <Layout
        urlBg={bg}
        title="This is Title layout 3"
        descr="This is Description 3"
        colorBg=""
      />
      <Footer />
    </>
  );
}

export default App;
