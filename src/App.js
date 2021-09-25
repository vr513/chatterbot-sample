import './App.css';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';

function App() {
  return (
    <div className="container">
      <Header companyName="Convenant IT Solutions" />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
