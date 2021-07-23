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

  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const dbRef = firebase.database().ref();
    dbRef.push(userInput);
    console.log(userInput);

  };

  return (
    <div className="App">

      <header className="App-header">
        <h1>Linked</h1>
        <p>Share your feeling with someone important</p>

        <form action="submit" onSubmit={handleSubmit}>
          <label htmlFor="userText"></label>
          <textarea id="userText"  value={userInput} cols="70" rows="10"></textarea>
          <button type="submit">Tweet!</button>
        </form>
      </header>


      <main className="App-main">
        <ul>
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
      </main>

      <footer className="App-footer">
        <p>Created at<a href="https://junocollege.com/">Juno College of Techonology</a> by Mao</p>
      </footer>
    </div>
  );
}

export default App;
