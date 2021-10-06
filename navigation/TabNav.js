import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {FontAwesome5} from '@expo/vector-icons'
import AddButton from '../components/addButton';
import {page1Screen,page2Screen,page3Screen,page4Screen} from '../screens'
import TabBarIcon from '../components/TabBarIcon'

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME} tabBarOptions={{
        showLabel: false
    }}>
    <BottomTab.Screen
      name="Page1"
      component={page1Screen}
      options={{
        title: 'Get Started',
        tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name='calendar-day' size={24} color='#cdccce' />,
      }}
    />
    <BottomTab.Screen
      name="Page2"
      component={page2Screen}
      options={{
        title: 'Resources',
        tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name='clock' size={24} color='#cdccce' />,
      }}
    />

<BottomTab.Screen
      name="Add Fab"
      component={page4Screen}
      options={{
        title: 'Resources',
        tabBarIcon: ({ focused }) => <AddButton/>,
      }}
    />

    <BottomTab.Screen
    name='Page3'
    component={page3Screen}
    options={{
      title: 'Test Tab',
      tabBarIcon: ({focused}) => <TabBarIcon focused={focused} name='envelope' size={24} color='#cdccce' />,
    }}>

    </BottomTab.Screen>

    <BottomTab.Screen
    name='Page4'
    component={page4Screen}
    options={{
      title: 'Test Tab',
      tabBarIcon: ({focused}) => <TabBarIcon focused={focused} name='user' size={24} color='#cdccce' />,
    }}>

    </BottomTab.Screen>
  </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'Page1':
      return 'Upcoming Events';
    case 'Page2':
      return 'Links to learn more';
    case 'Page3':
      return 'Notifications';
      case 'Page4':
        return 'Settings';
  }
}
