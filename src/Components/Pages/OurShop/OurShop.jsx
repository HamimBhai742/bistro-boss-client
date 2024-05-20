import React, { useState } from 'react';
import img1 from '../../../assets/shop/banner2.jpg'
import Cover from '../../Shared/Cover/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../../hooks/useMenu';
import OurCard from '../../Shared/ShopCard/OurCard';
import GridLay from '../../Shared/ItemsL/GridLay';
import { useParams } from 'react-router-dom';
const OurShop = () => {
    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks']
    const { category } = useParams()
    const inatialIndex = categories.indexOf(category)
    const [tabs, setTabs] = useState(inatialIndex)
    const [menus] = useMenu()
    const drinks = menus.filter(itm => itm.category === 'drinks')
    const dessert = menus.filter(itm => itm.category === 'dessert')
    const soup = menus.filter(itm => itm.category === 'soup')
    const pizza = menus.filter(itm => itm.category === 'pizza')
    const salad = menus.filter(itm => itm.category === 'salad')

    console.log(category);
    return (
        <div>
            <Cover img={img1} titel='OUR SHOP' subtitel='Would you like to try a dish?'></Cover>
            <Tabs defaultIndex={tabs} onSelect={(index) => setTabs(index)}>
                <TabList className='text-center my-5'>
                    <Tab>SALAD</Tab>
                    <Tab>PIZZA</Tab>
                    <Tab>SOUPS</Tab>
                    <Tab>DESSERTS</Tab>
                    <Tab>DRINKS</Tab>
                </TabList>
                <TabPanel>
                    <GridLay items={salad}></GridLay>
                </TabPanel>
                <TabPanel>
                    <GridLay items={pizza}></GridLay>
                </TabPanel>
                <TabPanel><GridLay items={soup}></GridLay></TabPanel>
                <TabPanel><GridLay items={dessert}></GridLay></TabPanel>
                <TabPanel><GridLay items={drinks}></GridLay></TabPanel>
            </Tabs>
        </div>
    );
};

export default OurShop;