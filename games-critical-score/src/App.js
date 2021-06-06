import Card from './components/Card';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
      <main className="container">
        <div className="row">
          <Card className="col-4" />
          <Card className="col-4" />
          <Card className="col-4" />
          <Card className="col-4" />
          <Card className="col-4" />
          <Card className="col-4" />
          <Card className="col-4" />
          <Card className="col-4" />
          <Card className="col-4" />
          <Card className="col-4" />
          <Card className="col-4" />
        </div>
      </main>
    </>
  );
}

export default App;
