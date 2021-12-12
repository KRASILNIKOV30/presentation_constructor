import { Editor } from './model/types';
import { ToolBar } from './toolBar/ToolBar';
import { SlideEditor } from './slideEditor/slideEditor';
import './App.css';

type AppProps = {
    editor: Editor;
}

function App({ editor }: AppProps) {
    const indexSlide: number = editor.presentation.slides.findIndex(slide => slide.slideId === editor.currentSlideIds[0]);
    return (
        <div className="App">
            <ToolBar
                editor = { editor }
            />
            <SlideEditor 
                slide = {editor.presentation.slides[indexSlide]}
            />
        </div>
    )
}

export default App;