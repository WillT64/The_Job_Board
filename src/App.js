import "./App.css";
import Header from "./components/Header.jsx";
import Content from "./components/Content.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  let offers = [
    {
      title: "Full Times Sale Associate",
      text: "CDI - Australie - Sydney",
      color: "red",
    },
    {
      title: "Developpeur React Senior JS",
      text: "CDI - France",
      color: "blue",
    },
    {
      title: "Full Times Sale Associate",
      text: "CDI - Australie - Sydney",
      color: "violet",
    },
    {
      title: "Full Times Sale Associate",
      text: "CDI - Australie - Sydney",
      color: "green",
    },
    {
      title: "Developpeur React Senior JS",
      text: "CDI - France",
      color: "cyan",
    },
    {
      title: "Full Times Sale Associate",
      text: "CDI - Australie - Sydney",
      color: "rose",
    },
    {
      title: "Full Times Sale Associate",
      text: "CDI - Australie - Sydney",
      color: "yellow",
    },
    {
      title: "Developpeur React Senior JS",
      text: "CDI - France",
      color: "blue",
    },
    {
      title: "Full Times Sale Associate",
      text: "CDI - Australie - Sydney",
      color: "brown",
    },
    {
      title: "Full Times Sale Associate",
      text: "CDI - Australie - Sydney",
      color: "orange",
    },
    {
      title: "Developpeur React Senior JS",
      text: "CDI - France",
      color: "violet",
    },
    {
      title: "Full Times Sale Associate",
      text: "CDI - Australie - Sydney",
      color: "black",
    },
  ];

  const repeat = () => {
    return offers.map((elem, index) => {
      return (
        <Content
          key={index}
          title={elem.title}
          text={elem.text}
          color={elem.color}
        />
      );
    });
  };

  return (
    <div className="App">
      <Header />
      <div className="content">{repeat()}</div>
      <Footer />
    </div>
  );
}

export default App;
