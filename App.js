import * as React from "react";
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OrderScreen from "./src/screens/Order/OrderScreen";
import OrderDelivery from "./src/screens/OrderDelivery/OrderDelivery";
import Tabs from "./src/navigation/Tabs";
import { Provider } from "react-redux";
import store from "./src/app/store";


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Tab" component={Tabs} options={{ headerShown: false }} />
          <Stack.Screen name="Order" component={OrderScreen} options={{ headerShown: false }} />
          <Stack.Screen name="OrderDelivery" component={OrderDelivery} options={{ headerShown: false }} />
        </Stack.Navigator>
        {/* <Tabs /> */}
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
