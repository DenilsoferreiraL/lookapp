import { createDrawerNavigator } from "@react-navigation/drawer";
import { Feed } from "../../pages/Feed";
import { Home } from "../../pages/Home";
import { Signin } from "../../pages/Signin";

const Drawer = createDrawerNavigator()

export function DrawerNavigate() {
    return (
        <Drawer.Navigator initialRouteName="Feed" screenOptions={{
            headerShown: false,
        }}>
            <Drawer.Screen name="Feed" component={Feed} />
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="Login" component={Signin} />
        </Drawer.Navigator>
    )
}