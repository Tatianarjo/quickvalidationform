import  './App.css';
import FormInput from './components/FormInput';
import { useMulti } from './useMulti';


function App() {
  const { steps, currentStepIndex, step } = useMulti([
  <div>One</div>, 
  <div>Two</div>,
])
  
  return <div style={{
    position: "relative",
    background: "purple",
    border: "5px dotted pink",
    padding: "2rem",
    margin: "1rem",
    borderRadius: "5rem",
    fontFamily: "Arial",

  }}>

    <form>
      <div style={{ top: ".5rem", right: "55rem",}}>
       { currentStepIndex + 1 } / {steps.length}
      <FormInput placeholder="Enter city, point of interest, or address"/>
      <FormInput placeholder="Select your dates"/>
      <FormInput placeholder="Rooms"/>
      <FormInput placeholder="Attendees" />
      </div>
      {step}
      <div style={{
        marginTop: "1rem", 
        display: "flex", 
        gap: ".5rem", 
        justifyContent: "flex-end",
        }}
        >
          <button>Back</button>
          <button>Next</button>
      </div>
    </form>
  </div>
}

export default App;
