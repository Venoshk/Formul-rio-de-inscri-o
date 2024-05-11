import { useEffect } from 'react';
import './Icon.scss';
import Icone from '../../assets/images/illustration-sign-up-desktop.svg';
import IconeMobile from '../../assets/images/illustration-sign-up-mobile.svg';

export default function CardImage() {

   useEffect(() => {
        const handleCheckWidth = (): void => {
            const screenWidth = innerWidth;
            const image = document.querySelector('.image') as HTMLImageElement;
            
            if(screenWidth < 768){
                image.src = IconeMobile;
            }else{
                image.src = Icone;
            }
        }

        handleCheckWidth();

        addEventListener('resize', handleCheckWidth);

        return () => {
            removeEventListener('resize', handleCheckWidth);
        }
   }, []);
   
    return <img className="image" src={Icone} alt="" />;
}
