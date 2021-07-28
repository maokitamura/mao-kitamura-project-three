import { useState } from 'react';
import firebase from './firebase';

const Header = () => {

  const [userInput, setUserInput] = useState("");
  
  const handleChange = (e) => {
    setUserInput(e.target.value)
  };

  const handleError = () => {
    alert('Update something about you! Its empty!');
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userInput === "") {
      handleError()
    } else {
    const dbRef = firebase.database().ref();
    dbRef.push(userInput);
    setUserInput("");
    }
  };

  return ( 
    <header className="App-header">
      <div className="wrapper">
        <h1>LINK'd</h1>
        <p>Share your feeling with someone important</p>
        <p>Can not contain more than 50 characters.</p>
          <form action="submit" onSubmit={handleSubmit}>
            <label htmlFor="userText"></label>
            <textarea id="userText" onChange={handleChange} value={userInput} cols="70" rows="7" placeholder="What's happening" maxlength="80"></textarea>
            <button type="submit">Update!</button>
          </form>
      </div>
    </header>
  )
}

export default Header;