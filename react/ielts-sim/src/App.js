import './App.css';
import Greet from './components/Greet'


const App = () => {

  const name = 'React';
  const Person = () => {
    return <>
      <h2>First Name: Kartik</h2>
      <h2>Last Name: Gadagalli</h2>
      <h2>Age: 22</h2>
    </>
  }
  return (
    <div className="App">
      <Greet />
      <Person />
    </div>
  );
}

export default App;
