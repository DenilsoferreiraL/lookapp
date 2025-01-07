import { StatusBar } from "expo-status-bar";
import { Touchable } from "../../components";
import { Header } from "../../components/Header";
import Icon from 'react-native-vector-icons/SimpleLineIcons'


export function Product() {
    return (
        <>
            <StatusBar barStyle="dark-content" />
            <Header
                title={'Nome do Produto'}
                goBack
                right={() => (<Touchable width="70px" align="center" onPress={() => alert('teste')} >
                    <Icon name="bag" size={25} />
                </Touchable>)}
            />
        </>
    )
}