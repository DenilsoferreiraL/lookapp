import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "./pages/Home";
import { Signin } from "./pages/Signin";
import { SingUp } from "./pages/Singup";
import { Feed } from "./pages/Feed";

const Stack = createStackNavigator()

export function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home" >
                <Stack.Screen options={{ headerShown: false }} name="Home" component={Home} />
                <Stack.Screen options={{ headerShown: false }} name="Signin" component={Signin} />
                <Stack.Screen options={{ headerShown: false }} name="Singup" component={SingUp} />
                <Stack.Screen options={{ headerShown: false }} name="Feed" component={Feed} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

