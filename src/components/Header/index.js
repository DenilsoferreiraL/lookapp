import { SafeAreaView, StatusBar } from 'react-native'
import { Title, Box, Touchable } from '../../components'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { colors } from '../../styles/theme.json'

export function Header({ title }) {
    return (
        <>
            <StatusBar barStyle="dark-content" />
            <Box fluid height="100px" justify="center" border={`1px solid ${colors.muted}50`} >
                <SafeAreaView style={{ flexDirection: 'row' }} >
                    <Touchable width="80px" align="center" justify="center" onPress={(() => alert('teste'))}>
                        <Icon name="menu" size={25} />
                    </Touchable>
                    <Box align="center" justify="center">
                        <Title variant="normal">{title}</Title>
                    </Box>
                    <Box width="80px"></Box>
                </SafeAreaView>
            </Box>
        </>
    )
}