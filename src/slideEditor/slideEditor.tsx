import './SlideEditor.css';
import { SlidesElement } from "../common/SlidesElement/SlidesElement";
import type { Slide } from '../model/types'

type SlideBarProps = {
        slide: Slide
}

function SlideEditor({
        slide 
    }: SlideBarProps) {
    const slideElements = slide.elements.map((slideElement) =>
        <li
            key = {slideElement.elementId}
            className = 'slideElement'
        >
            <SlidesElement
                slideElement = {slideElement}
            />
        </li>
    )    
    return (
        <div className="slide-container">
            <div 
                className="slide"
                style = {{"background": slide.background}}
            >
                <ul>{slideElements}</ul>                
            </div>
        </div>
    )
}

export { SlideEditor }