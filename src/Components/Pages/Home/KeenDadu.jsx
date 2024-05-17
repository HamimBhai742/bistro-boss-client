import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import img1 from '../../../assets/home/slide1.jpg'
import img2 from '../../../assets/home/slide2.jpg'
import img3 from '../../../assets/home/slide3.jpg'
import img4 from '../../../assets/home/slide4.jpg'
import img5 from '../../../assets/home/slide5.jpg'

const KeenDadu = () => {
    const [sliderRef] = useKeenSlider({
        slides: {
            perView: 4,
            spacing: 1,
        },
    })
    return (
        <div className="my-8 max-w-[1170px]  mx-auto">
            <div ref={sliderRef} className="keen-slider">
                <div className="keen-slider__slide number-slide1"><img src={img1} alt="" /></div>
                <div className="keen-slider__slide number-slide2"><img src={img2} alt="" /></div>
                <div className="keen-slider__slide number-slide3"><img src={img3} alt="" /></div>
                <div className="keen-slider__slide number-slide4"><img src={img4} alt="" /></div>
                <div className="keen-slider__slide number-slide5"><img src={img5} alt="" /></div>
            </div>
        </div>
    );
};

export default KeenDadu;