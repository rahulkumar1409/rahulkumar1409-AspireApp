
/***
 * @description tab navigator setup
 * @property any
 * @returns tab navigator
 */

import { React } from "@app/shared-import";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { credit, debitCard, home, payments, profile } from "./labels";
import Home from "../modules/app-tabs/home";
import DebitCard from "../modules/app-tabs/debit-card";
import Payments from "../modules/app-tabs/payments";
import Credit from "../modules/app-tabs/credit";
import Profile from "../modules/app-tabs/profile";
import { MyTabBar } from "@app/components/atoms";
const Tabs = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tabs.Navigator 
            initialRouteName={debitCard}
            tabBar={props => <MyTabBar {...props} />}
            screenOptions={{
                headerShown: false
            }}
        >
            <Tabs.Screen 
                options={{
                    title: 'Home'
                }} 
                name={home} 
                component={Home} 
            />
            <Tabs.Screen 
                options={{
                    title: 'Debit Cards'
                }} 
                name={debitCard} 
                component={DebitCard} 
            />
            <Tabs.Screen 
                options={{
                    title: 'Payments'
                }} 
                name={payments} 
                component={Payments} 
            />
            <Tabs.Screen 
                options={{
                    title: 'Credit'
                }} 
                name={credit} 
                component={Credit} 
            />
            <Tabs.Screen 
                options={{
                    title: 'Profile'
                }} 
                name={profile} 
                component={Profile} 
            />
        </Tabs.Navigator>
    )
}

export default TabNavigator;