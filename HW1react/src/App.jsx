import './App.css'
import ImageComponent from './components/ImageComponent.jsx';
import VideoComponent from './components/VideoComponent.jsx';
import ParagraphsComponent from './components/ParagraphsComponent.jsx';
import ListsComponent from './components/ListsComponent.jsx';


function App() {

  return (
   <div className="cont">
    <div className="media">
<ImageComponent/>
<VideoComponent/>
</div>
<ParagraphsComponent/>
<ListsComponent/>
   </div>
  )
}

export default App
