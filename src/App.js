import {useState, useEffect} from 'react';
import firebase from './firebase';
import './App.css';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBirthdayCake, faUsers, faImage, faDoorClosed, faFlagCheckered } from '@fortawesome/free-solid-svg-icons';
// import Login from './Login';


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

  // Change, submit, delete
  const handleChange = (e) => {
    setUserInput(e.target.value)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const dbRef = firebase.database().ref();
    dbRef.push(userInput);
    setUserInput("");
  };

  return (
    <div className="App">

      <div className="container">
      <nav>
        <p className="menu">MENU</p>
        <p><a href="#usertText"><FontAwesomeIcon icon={faUsers} /> Profile</a></p>
        <p><a href="#usertText"><FontAwesomeIcon icon={faBirthdayCake} /> Aniversary</a></p>
        <p><a href="#usertText"><FontAwesomeIcon icon={faImage} /> Album</a></p>
        <p><a href="#usertText"><FontAwesomeIcon icon={faDoorClosed} /> Room</a></p>
        <p><a href="#usertText"><FontAwesomeIcon icon={faFlagCheckered} /> Notification</a></p>
      </nav>

      <div className="container2">
        <header className="App-header">
          <div className="wrapper">
            <h1>LINK'd</h1>
            <p>Share your feeling with someone   important</p>
            <form action="submit" onSubmit={handleSubmit}>
              <label htmlFor="userText"></label>
              <textarea id="userText" onChange={handleChange} value={userInput} cols="70" rows="10" placeholder="What's happening" maxlength="180"></textarea>
              <button type="submit">Update!</button>
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
        <div className="wrapper">
          <p>Created at<a href="https://junocollege.com/">Juno College of Techonology</a> by Mao</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
