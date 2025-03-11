import 'react-native-gesture-handler';
import "app.css"
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from 'screens/HomeScreen';
import { IconComponentProvider } from "@react-native-material/core";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { AppRegistry } from 'react-native';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import RestaurantScreen from "screens/RestaurantScreen";
import { Provider } from "react-redux";
import { store } from "store";
import BasketScreen from "screens/BasketScreen";
import PreparingOrderScreen from "screens/PreparingOrderScreen";
import DeliveryOrderScreen from 'screens/DeliveryOrderScreen';
const Stack = createStackNavigator();

const RootStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Restaurant" component={RestaurantScreen} />
      <Stack.Screen name="Basket" component={BasketScreen} options={{ presentation: "modal", headerShown: false }} />
      <Stack.Screen name="Preparing" component={PreparingOrderScreen} options={{ presentation: "fullScreenModal", headerShown: false }} />

      <Stack.Screen name="Delivery" component={DeliveryOrderScreen} options={{ presentation: "fullScreenModal", headerShown: false }} />
    </Stack.Navigator>
  )
}

function App() {
  const BE_URL = process.env.EXPO_PUBLIC_BE_URL


  // Initialize Apollo Client
  const client = new ApolloClient({
    uri: `${BE_URL}/graphql`,
    cache: new InMemoryCache()
  });
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <NavigationContainer>
          <RootStack />
        </NavigationContainer>
      </Provider>
    </ApolloProvider>

  );
}

export default App;