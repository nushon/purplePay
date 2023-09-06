import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './components/screens/HomeScreen';
import CardScreen from './components/screens/CardScreen';
import BillsScreen from './components/screens/BillsScreen';
import AccountScreen from './components/screens/AccountScreen';
import FontAwesome from '@expo/vector-icons/FontAwesome';


const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home';
            }
            else if (route.name === 'Card') {
              iconName = focused ? 'credit-card' : 'credit-card';
            }
            else if (route.name === 'Bills') {
              iconName = focused ? 'money' : 'money';
            }
            else if (route.name === 'Account') {
              iconName = focused ? 'user' : 'user';
            }
            
            return <FontAwesome name={iconName} color={color} size={size} />
          },
          tabBarActiveTintColor: '#9336B4',
          tabBarInactiveTintColor: 'gray',

        })}
        >
        <Tab.Screen name= "Home" component={HomeScreen} />
        <Tab.Screen name="Card" component={CardScreen} />
        <Tab.Screen name="Bills" component={BillsScreen} />
        <Tab.Screen name="Account" component={AccountScreen} />
    </Tab.Navigator>
    </NavigationContainer>
   
  );
}

