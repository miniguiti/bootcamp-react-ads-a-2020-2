import Student from './pages/Student'
import './assets/css/style.css'

function App() {
  const scriptIcons = document.createElement("script")
  scriptIcons.src = "https://kit.fontawesome.com/9e43a3780f.js"
  document.body.appendChild(scriptIcons)

  return (
    <Student/>
  );
}

export default App;
