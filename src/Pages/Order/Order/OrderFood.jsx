import React, { useState } from 'react'

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import order from '../../../assets/shop/banner2.jpg'
import Cover from '../../../Shared/Cover/Cover'
import userMenu from '../../../hooks/userMenu';
import FoodCart from '../../../Components/SectionTitle/FoodCart/FoodCart';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

function OrderFood() {

    const categoryies = ['salad', 'pizza', 'soup', 'dessert', 'drinks', 'offered']
    const { category } = useParams();
    const initialIndex = categoryies.indexOf(category)
    const [tabindex, setTabIndex] = useState(initialIndex);
    const [menu] = userMenu();

    const desert = menu.filter(item => item.category === 'dessert');
    const salad = menu.filter(item => item.category === 'salad');
    const drinks = menu.filter(item => item.category === 'drinks');
    const soup = menu.filter(item => item.category === 'soup');
    const pizza = menu.filter(item => item.category === 'pizza');
    const offered = menu.filter(item => item.category === 'offered');

    return (
        <div>
            <Helmet>
                <title>Bistro Boss - Order Food</title>
            </Helmet>
            <Cover img={order} title={"Order Food"} paragraph={"Would you like to try a dish?"} ></Cover>
            <Tabs defaultIndex={tabindex} onSelect={(index) => setTabIndex(index)}>
                <TabList >
                    <Tab>SALAD</Tab>
                    <Tab>PIZZA</Tab>
                    <Tab>SOUPS</Tab>
                    <Tab>DESSERTS</Tab>
                    <Tab>DRINKS</Tab>
                    <Tab>Offered</Tab>
                </TabList>

                <TabPanel>
                    <div className='grid md:grid-cols-3 gap-10'>
                        {
                            salad.map(item => <FoodCart key={item._id} item={item}></FoodCart>)
                        }
                    </div>
                </TabPanel>


                <TabPanel>
                    <div className='grid md:grid-cols-3 gap-10'>
                        {
                            pizza.map(item => <FoodCart key={item._id} item={item}></FoodCart>)
                        }
                    </div>
                </TabPanel>

                <TabPanel>
                    <div className='grid md:grid-cols-3 gap-10'>
                        {
                            soup.map(item => <FoodCart key={item._id} item={item}></FoodCart>)
                        }
                    </div>
                </TabPanel>

                <TabPanel>
                    <div className='grid md:grid-cols-3 gap-10'>
                        {
                            desert.map(item => <FoodCart key={item._id} item={item}></FoodCart>)
                        }
                    </div>
                </TabPanel>

                <TabPanel>
                    <div className='grid md:grid-cols-3 gap-10'>
                        {
                            drinks.map(item => <FoodCart key={item._id} item={item}></FoodCart>)
                        }
                    </div>
                </TabPanel>

                <TabPanel>
                    <div className='grid md:grid-cols-3 gap-10'>
                        {
                            offered.map(item => <FoodCart key={item._id} item={item}></FoodCart>)
                        }
                    </div>
                </TabPanel>


            </Tabs>
        </div>
    )
}

export default OrderFood
