import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { Home } from "./pages/Home";
import { Signin } from "./pages/Signin";
import { SingUp } from "./pages/Singup";
import { DrawerNavigate } from "./components/Drawer";
import { Category } from "./pages/Marketplace/category";
import { Product } from "./pages/Marketplace/product";
import { Cart } from "./pages/Cart";


const Stack = createStackNavigator()

export function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Cart" >
                <Stack.Screen options={{ headerShown: false }} name="Home" component={Home} />
                <Stack.Screen options={{ headerShown: false }} name="Signin" component={Signin} />
                <Stack.Screen options={{ headerShown: false }} name="Singup" component={SingUp} />
                <Stack.Screen options={{ headerShown: false }} name="Feed" component={DrawerNavigate} />
                <Stack.Screen options={{ headerShown: false }} name="Category" component={Category} />
                <Stack.Screen options={{ headerShown: false }} name="Product" component={Product} />
                <Stack.Screen options={{ headerShown: false }} name="Cart" component={Cart} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

