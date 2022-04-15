import './App.css';
import "chemistdev/dist/index.css";
// import { Button , ExampleComponent } from "chemistdev";
import { Button , Paragraph } from "chemistdev";


function App() {
  return (
    <div className="App">
     < Button text="Reyhan" />
     {/* < ExampleComponent text="ben example"/>  */}
     <Paragraph text="Paragraf!" />
    </div>
  );
}

export default App;
