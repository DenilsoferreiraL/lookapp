import { StatusBar } from "expo-status-bar";
import { Touchable } from "../../components";
import { Header } from "../../components/Header";
import Icon from 'react-native-vector-icons/SimpleLineIcons'
import { CategoryList } from "../../components/Category/list";


export function Marketplace() {
    return (
        <>
            <StatusBar barStyle="dark-content" />
            <Header
                title={'Categorias'}
                right={() => (<Touchable width="70px" align="center" onPress={() => alert('teste')} >
                    <Icon name="bag" size={25} />
                </Touchable>)}
            />
            <CategoryList />
        </>
    )
}