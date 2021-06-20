import logo from './logo.svg';
import './App.css';
import Test from "./komponenty/test"
import Cs from "./komponenty/cs"
import Ahoj from "./komponenty/ahoj"
import Zprava from "./komponenty/zprava"
import Pocitac from "./komponenty/pocitac"
import Kliknuti from './komponenty/kliknuti'
import ClassKlik from './komponenty/ClassKlik'
import EventBind from "./komponenty/EventBind"

function App() {
  return (
    <div className="App">
      <Pocitac></Pocitac>
      <EventBind></EventBind>
    </div>
  );
}

export default App;
