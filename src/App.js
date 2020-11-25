import './assets/css/style.css'
import Teacher from './pages/Teacher'

function App() {
  const scriptIcons = document.createElement("script")
  scriptIcons.src = "https://kit.fontawesome.com/9e43a3780f.js"
  document.body.appendChild(scriptIcons)

  return (
    <Teacher/>
  );
}

export default App;
