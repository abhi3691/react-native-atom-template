import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import UserList from '../screens/userList';
import UserProfile from '../screens/userPorfile';
const Stack = createStackNavigator();
const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="UserList" component={UserList} />
        <Stack.Screen
          name="UserProfile"
          component={UserProfile}
          options={{presentation: 'modal', animationTypeForReplace: 'push'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
