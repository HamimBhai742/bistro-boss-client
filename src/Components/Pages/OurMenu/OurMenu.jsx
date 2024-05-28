import { useEffect } from 'react'
import imghh from '../../../assets/menu/banner3.jpg'
import img1 from '../../../assets/menu/dessert-bg.jpeg'
import img2 from '../../../assets/menu/pizza-bg.jpg'
import img3 from '../../../assets/menu/salad-bg.jpg'
import img4 from '../../../assets/menu/soup-bg.jpg'
import useMenu from '../../../hooks/useMenu';
import Cover from '../../Shared/Cover/Cover';
import OrderBtn from '../../Shared/MenuBtn/OrderBtn'
import Shaerd from '../../Shared/Shaerd';
const OurMenu = () => {
    const [menus] = useMenu()
    console.log(menus);
    const offered = menus.filter(itm => itm.category === 'offered')
    const dessert = menus.filter(itm => itm.category === 'dessert')
    const soup = menus.filter(itm => itm.category === 'soup')
    const pizza = menus.filter(itm => itm.category === 'pizza')
    const salad = menus.filter(itm => itm.category === 'salad')
    useEffect(() => {
        fetch('http://localhost:5000/menu')
            .then(res => res.json())
            .then(data => {console.log(data)})
}, [])

return (
    <div>
        <Cover img={imghh} titel='OUR MENU' subtitel='Would you like to try a dish?'></Cover>
        <div className='mt-8'>
            <p className='text-xl text-center text-[#D99904] italic'> ---Don't miss---</p>
            <div className='border-b-2 w-64 mx-auto mt-5'></div>
            <h3 className='text-center text-[#151515] text-4xl my-3'>TODAY'S OFFER</h3>
            <div className='border-b-2 w-64 mx-auto mb-3'></div>
        </div>
        <div className='grid grid-cols-2 gap-8 max-w-[1170px] mx-auto my-5'>
            {
                offered.map((item, idx) => <Shaerd key={idx} item={item}></Shaerd>)
            }
        </div>
        <OrderBtn value='ORDER YOUR FAVOURITE FOOD' titel='offered'></OrderBtn>


        <Cover img={img1} titel='DESSERTS' subtitel='The term dessert can apply to many sweets'></Cover>
        <div className='grid grid-cols-2 gap-8 max-w-[1170px] mx-auto my-5'>
            {
                dessert.map((item, idx) => <Shaerd key={idx} item={item}></Shaerd>)
            }
        </div>
        <OrderBtn value='ORDER YOUR FAVOURITE FOOD' titel='dessert'></OrderBtn>
        <Cover img={img2} titel='PIZZA' subtitel='Pizza is an Italian food that was created in Italy '></Cover>
        <div className='grid grid-cols-2 gap-8 max-w-[1170px] mx-auto my-5'>
            {
                pizza.map((item, idx) => <Shaerd key={idx} item={item}></Shaerd>)
            }
        </div>
        <OrderBtn titel='pizza' value='ORDER YOUR FAVOURITE FOOD'></OrderBtn>


        <Cover img={img3} titel='SALADS' subtitel='The word salad stems from the Latin word'></Cover>
        <div className='grid grid-cols-2 gap-8 max-w-[1170px] mx-auto my-5'>
            {
                salad.map((item, idx) => <Shaerd key={idx} item={item}></Shaerd>)
            }
        </div>
        <OrderBtn titel='salad' value='ORDER YOUR FAVOURITE FOOD'></OrderBtn>



        <Cover img={img4} titel='SOUPS' subtitel='Soup is a primarily liquid food, generally served warm or hot'></Cover>
        <div className='grid grid-cols-2 gap-8 max-w-[1170px] mx-auto my-5'>
            {
                soup.map((item, idx) => <Shaerd key={idx} item={item}></Shaerd>)
            }
        </div>
        <OrderBtn titel='soup' value='ORDER YOUR FAVOURITE FOOD'></OrderBtn>
    </div>
);
};

export default OurMenu;