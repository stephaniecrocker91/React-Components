
import Carousel from 'react-bootstrap/Carousel';
import Hero from '../images/hero.png';
import Hero2 from '../images/hero2.png';
import Hero3 from '../images/hero3.png';
import styles from '../styles/Carousel.module.css';


var heroData = [
    {id: 1,
    image: Hero,
    },
    {id: 2,
    image: Hero2,
    },
    {id: 3,
    image: Hero3,
    },

]

function CarouselComponent() {
    return (
        <section id ={styles.home}className={
            styles.HeroBlock
        }>
            <Carousel>
                {
                heroData.map (hero=>{
                    return(
                        <Carousel.Item interval={3000} key={hero.id}>
                            {/* Add the overlay div under here */}
                            <div className={
                                styles.overlay
                                }>    
                            </div>
                            <img className="d-block w-100"
                            src={hero.image}
                            alt={"Slide"+ hero.id}/>
                        </Carousel.Item>
                    )
                })
            }
                
            </Carousel>
        </section>
    );
}

export default CarouselComponent;
