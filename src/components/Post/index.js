import { Text, Box, Cover, Title, Touchable } from '../../components/index'
import Icon from 'react-native-vector-icons/SimpleLineIcons'
import { colors } from '../../styles/theme.json'

export function Post() {
    return (
        <Box hasPadding>
            <Box row align="center">
                <Cover
                    width="40px"
                    height="40px"
                    circle
                    image="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=812,h=507,fit=crop/AR0b5XDqBBFnQQRV/thumb2-nezuko-kamado-manga-kimetsu-no-yaiba-girl-with-purple-eyes-kamado-nezuko-1-YKbre5j9KeU92PQP.jpg"
                />
                <Box spacing="0px 0px 0px 10px">
                    <Text bold color="dark">Nezuko</Text>
                    <Text variant="normal">2 mins ago</Text>
                </Box>
                <Touchable align="flex-end" height="30px" width="100px">
                    <Icon name='options' size={15} color={colors.muted} />
                </Touchable>
            </Box>
        </Box>
    )
}