import './assets/css/style.css'
import Routes from './routes'

function App() {
  const scriptIcons = document.createElement("script")
  scriptIcons.src = "https://kit.fontawesome.com/9e43a3780f.js"
  document.body.appendChild(scriptIcons)

  return (
    <Routes/>
  );
}

export default App;
