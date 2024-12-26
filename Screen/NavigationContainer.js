import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignIn from './SignIn';
import SignUp from './SignUp';
import ProfileScreen from './ProfileScreen/ProfileScreen';
import EntryScreen from './EnteryScreen/EnteryScreen';
import Enter4Code from './EnteryScreen/Enter4Code';
import VisitorDetailsForm from './VisitorForm';
import GuestRequest from './DetailSave/GuestRequest';
import MyHouses from './DetailSave/MyHouses';

const Stack = createNativeStackNavigator();

export default function NavigationContainerWrapper() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SignIn"
          component={SignIn}
        />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name = "EnterCode" component={Enter4Code}/>
        <Stack.Screen name = "EntryScreen" component = {EntryScreen}/>
        <Stack.Screen name='VisitorForm' component={VisitorDetailsForm}/>
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
        <Stack.Screen name="GuestRequest" component={GuestRequest}/>
        <Stack.Screen name="MyHouses" component={MyHouses}/>


      </Stack.Navigator>
    </NavigationContainer>
  );
}
