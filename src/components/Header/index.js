import { SafeAreaView, StatusBar, View } from 'react-native'
import { Title, Box, Touchable } from '../../components'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { colors } from '../../styles/theme.json'
import { useNavigation } from "@react-navigation/native";
import util from '../../util';

export function Header({ title = 'Explorar', right = null }) {
    const navigation = useNavigation()

    return (
        <View style={{
            borderBottomWidth: 1,
            borderBottomStyle: 'solid',
            borderBottomColor: util.toAlpha(colors.muted, 50),
            backgroundColor: colors.light
        }} >
            <StatusBar barStyle="dark-content" />
            <SafeAreaView
                style={{
                    flexDirection: 'row',
                    width: '100%',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}
            >
                <Touchable
                    width="70px"
                    align="center"
                    justify="center"
                    hasPadding
                    onPress={() => navigation.openDrawer()}>
                    <Icon name="menu" size={25} />
                </Touchable>
                <Box align="center" justify="center">
                    <Title variant="normal">{title}</Title>
                </Box>
                {right ? right() : <Touchable width="70px" hasPadding></Touchable>}
            </SafeAreaView>
        </View>
    )
}