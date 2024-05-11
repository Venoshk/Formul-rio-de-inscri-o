import Icone from "../../assets/images/illustration-sign-up-desktop.svg"
import IconeMobile from "../../assets/images/illustration-sign-up-mobile.svg"
import "./Icon.scss"
export default function IllustrationDesktop() {

    document.addEventListener("DOMContentLoaded", function() {
        const screenWidth = screen.width;
        const image = document.querySelector('.image') as HTMLImageElement;
    
        if (screenWidth <= 768) {
            image.src = IconeMobile ;
            image.style.border = '2px solid red'
        }
    });

    return <img className="image" src={Icone} alt="" />    
}

