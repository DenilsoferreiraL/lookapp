import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import { Feed } from "../../pages/Feed";
import { Home } from "../../pages/Home";
import { Signin } from "../../pages/Signin";
import { colors } from '../../styles/theme.json';
import Icon from 'react-native-vector-icons/SimpleLineIcons'
import { Title, Spacer } from '../../components/index'
import util from "../../util";

const Drawer = createDrawerNavigator();

const CustomDrawerComponent = props => {
    return (
        <DrawerContentScrollView {...props}>
            <Title bold color="light" variant="big" hasPadding >LOOKAPP</Title>
            <Spacer />
            <DrawerItemList {...props} />
        </DrawerContentScrollView >
    )
}

export function DrawerNavigate() {
    return (
        <Drawer.Navigator
            drawerContent={props => <CustomDrawerComponent {...props} />}
            screenOptions={{
                headerShown: false,
                drawerStyle: {
                    backgroundColor: colors.black,
                },
                drawerActiveBackgroundColor: util.toAlpha(colors.primary, 60),
                drawerActiveTintColor: colors.light,
                drawerInactiveTintColor: util.toAlpha(colors.light, 60)
            }}
        >
            <Drawer.Screen
                name="Início"
                component={Feed}
                options={{
                    drawerIcon: ({ focused, color }) => (
                        <Icon name="people" color={color} size={20} />
                    )
                }} />
            <Drawer.Screen name="Vitrine" component={Home} options={{
                drawerIcon: ({ focused, color }) => (
                    <Icon name="tag" color={color} size={20} />
                )
            }} />
            <Drawer.Screen name="Pedidos" component={Signin} options={{
                drawerIcon: ({ focused, color }) => (
                    <Icon name="basket" color={color} size={20} />
                )
            }} />
        </Drawer.Navigator>
    );
}
