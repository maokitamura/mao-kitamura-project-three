import Header from './Header';
import Footer from './Footer';
import Menu from './Menu';
import {useState, useEffect} from 'react';
import firebase from './firebase';
import './App.css';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrashAlt, faBirthdayCake, faUsers, faImage, faDoorClosed, faFlagCheckered } from '@fortawesome/free-solid-svg-icons';
library.add(faTrashAlt, faBirthdayCake, faUsers, faImage, faDoorClosed, faFlagCheckered);

function App() {

  const [textContent, setTextContent] = useState([]);

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

  return (
    <div className="App">
      <div className="container">
        <Menu />
        <div className="container2">
          <Header />
          <main className="App-main">
            <div className="wrapper">
              <ul className="text-container">
                {
                  textContent.map((textObj) => {
                    return(
                      <li key={textObj.key}>
                        <p>{textObj.content}</p>
                      </li>
                    )
                  })
                }
              </ul>
            </div>
          </main>
        </div>
      </div>
        <Footer />
    </div>
  );
}

export default App;
