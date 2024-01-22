import logo from './logo.svg';
import './App.css';
import axios from 'axios'

function App() {

  const handlePost = async () => {
    const postData = {
      amount: 15000,
      currency: "NGN",
      customerFirstName: "John",
      customerLastName: "Wick",
      customerPhoneNumber: "2348032132100",
      email: "john.wick@credocentral.com"
    };

    try {
      const response = await axios.post(
          "https://api.public.credodemo.com/transaction/initialize",
          postData,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: "0PUB0123uh60oK9l9nJ49trTDP190csn"
              // Add other headers as needed
            }
          }
      );

      console.log("Response from POST request:", response.data);
      // Handle response as needed
    } catch (error) {
      console.error("Error in POST request:", error);
      // Handle error as needed
    }
  };




  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >


          Learn React
        </a>
        <button onClick = {handlePost}>Submit</button>
      </header>
    </div>
  );
}

export default App;
