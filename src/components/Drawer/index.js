import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import { Feed } from "../../pages/Feed";
import { Signin } from "../../pages/Signin";
import { Marketplace } from "../../pages/Marketplace";
import { Category } from "../../pages/Marketplace/category";
import { Product } from "../../pages/Marketplace/product";
import { colors } from '../../styles/theme.json';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import { Title, Spacer } from '../../components/index';
import util from "../../util";

const Drawer = createDrawerNavigator();


const drawerScreens = [
    {
        name: "Início",
        component: Feed,
        icon: "home",
    },
    {
        name: "Categorias",
        component: Marketplace,
        icon: "bag",
    },

    {
        name: "Produtos",
        component: Product,
        icon: "tag",
    },

    {
        name: "Pedidos",
        component: Signin,
        icon: "basket",
    },
];

const CustomDrawerComponent = (props) => {
    return (
        <DrawerContentScrollView {...props}>
            <Title bold color="light" variant="big" hasPadding>
                LOOKAPP
            </Title>
            <Spacer />
            <DrawerItemList {...props} />
        </DrawerContentScrollView>
    );
};

export function DrawerNavigate() {
    return (
        <Drawer.Navigator
            drawerContent={(props) => <CustomDrawerComponent {...props} />}
            screenOptions={{
                headerShown: false,
                drawerStyle: {
                    backgroundColor: colors.black,
                },
                drawerActiveBackgroundColor: colors.primary,
                drawerActiveTintColor: colors.light,
                drawerInactiveTintColor: util.toAlpha(colors.light, 60),
            }}
        >
            {drawerScreens.map(({ name, component, icon }) => (
                <Drawer.Screen
                    key={name}
                    name={name}
                    component={component}
                    options={{
                        drawerIcon: ({ color }) => <Icon name={icon} color={color} size={20} />,
                    }}
                />
            ))}
        </Drawer.Navigator>
    );
}
