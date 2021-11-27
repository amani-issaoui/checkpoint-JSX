
import './App.css';
import image from "./imagesrc/app.jpg"
import './style.css'

function App() {
  return (
    <div className="App">
      <div  className="contenu" style={{border:"solid 1px black" ,maxWidth:"100vw"}}>
        <h1 className="title red">WEB DEVELOPMENT</h1>
        <img  className="photo" src="./imagepub/web.jpg" alt="web" />
        <img className="photo" src={image} alt="app" />
        </div>
        <video style={{width:320,height:240}} controls>
          <source src ="./videopub/prog.mp4" type="video/mp4"/>
        </video>
      
    </div>
  );
}

export default App;
