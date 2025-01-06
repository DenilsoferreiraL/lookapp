import { StatusBar } from "expo-status-bar";
import { Touchable } from "../../components";
import { Header } from "../../components/Header";
import Icon from 'react-native-vector-icons/SimpleLineIcons'
import { ProductList } from "../../components/Product/list";


export function Category() {
    return (
        <>
            <StatusBar barStyle="dark-content" />
            <Header
                title={'Produtos'}
                right={() => (<Touchable background="light" width="70px" align="center" onPress={() => alert('teste')} >
                    <Icon name="bag" size={25} />
                </Touchable>)}
            />
            <ProductList />
        </>
    )
}