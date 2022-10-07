import { Component } from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import FormValidationComponent from "./components/FormPage";

class App extends Component {

  constructor() {
    super();
    this.state = {
      formValues:''
    };
  }

  onFormSubmit = event => {
    // Get Form Values
    console.log(event);
    this.setState({formValues:JSON.stringify(event)})
  };

  render() {
    return (
      <div className="App container">
        <FormValidationComponent onSubmit={this.onFormSubmit}/>

        <div>
          <h5>Submited values</h5>
          <code>{this.state.formValues}</code>
        </div>
      </div>
    );
  }
}
export default App;