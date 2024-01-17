import { AccountForm } from './AccountForm';
import { AddressForm } from './AddressForm';
import './App.css';
import FormInput from './components/FormInput';
import { useMulti } from './useMulti';
import { UserForm } from './UserForm';

function App() {
  const { steps, currentStepIndex, step, isFirstStep, back, next, isLastStep } = 
  useMulti([<UserForm />, <AddressForm />, <AccountForm />])

  return <div style={{
    position: "relative",
    background: "hotpink",
    border: "5px dotted pink",
    padding: "2rem",
    margin: "1rem",
    borderRadius: "5rem",
    fontFamily: "Arial",
    fontWeight: "bold"

  }}>

    <form>
      <div style={{ top: ".5rem", right: "55rem", }}>
        {currentStepIndex + 1} / {steps.length}
        <FormInput placeholder="Enter city, point of interest, or address" />
        <FormInput placeholder="Select your dates" />
        <FormInput placeholder="Rooms" />
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
        {!isFirstStep && (
          <button type="button" onClick={back}>
            Back
          </button>
        )}
        <button type="button" onClick={next}>
          {isLastStep ? "Finish" : "Next"}
          </button>
      </div>
    </form>
  </div>
}

export default App;
