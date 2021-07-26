import {useState, useEffect} from 'react';
import firebase from './firebase';
import './App.css';
import './index.css';

function App() {

  const [textContent, setTextContent] = useState([]);
  const [userInput, setUserInput] = useState("");

  

  // Get info from Firebase
  useEffect(() => {
    const dbRef = firebase.database().ref();
    dbRef.on('value', (snapshot) => {
      const myData = snapshot.val();

      const newArray = [];

      for(let item in myData) {
        const textObj = {
          key: item,
          content: myData[item]
        }
        newArray.push(textObj);
      }
      setTextContent(newArray);
    })
  }, []);

  const handleChange = (e) => {
    setUserInput(e.target.value)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const dbRef = firebase.database().ref();
    dbRef.push(userInput);
    console.log(userInput);

    setUserInput("");

  };

  return (
    <div className="App">

      <div className="container">
      <nav>
        <p>MENU</p>
        <p><a href="#">Profile</a></p>
        <p><a href="#">Aniversary</a></p>
        <p><a href="#">Album</a></p>
        <p><a href="#">Room</a></p>
        <p><a href="#">Notification</a></p>
      </nav>

      <div className="container2">
        <header className="App-header">
          <div className="wrapper">
            <p>Loged in as ------.</p>
            <h1>LINK'd</h1>
            <p>Share your feeling with someone   important</p>
            <form action="submit" onSubmit=  {handleSubmit}>
              <label htmlFor="userText"></label>
              <textarea id="userText"  onChange=  {handleChange} value={userInput} cols="70" rows="10" placeholder="What's happening" maxlength="180"></textarea>
              <button type="submit">Tweet!</button>
            </form>
          </div>
        </header>

      <main className="App-main">
        <div className="wrapper">
          <ul className="text-container">
            {
              textContent.map((textObj) => {
                return(
                  <li key={textObj.key}>
                    <p>{textObj.content}</p>
                    <p></p>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </main>
            </div>
            </div>


      <footer className="App-footer">
        <p>Created at<a href="https://junocollege.com/">Juno College of Techonology</a> by Mao</p>
      </footer>
    </div>
  );
}

export default App;
