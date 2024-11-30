import { Text, Box, Cover, Title, Touchable, Spacer } from '../../components/index'
import Icon from 'react-native-vector-icons/SimpleLineIcons'
import { colors } from '../../styles/theme.json'

export function Post() {
    return (
        <Box hasPadding fluid >
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
            <Cover
                image="https://static.wikia.nocookie.net/one-minute-meelee-fanon/images/9/92/Nezuko_Kamado_%28Advanced_Demon_Form%29.png/revision/latest?cb=20231207163554"
                width="100%"
                height="200px"
                spacing="10px 0px"
                radius="10px"
            />
            <Box row fluid align="center">
                <Box row fluid align="center">
                    {Array.from(Array(3))?.map(item => (
                        <Cover
                            circle
                            border={`1px solid ${colors.light}`}
                            spacing="0px -15px 0px 0px"
                            width="30px"
                            height="30px"
                            image="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=812,h=507,fit=crop/AR0b5XDqBBFnQQRV/thumb2-nezuko-kamado-manga-kimetsu-no-yaiba-girl-with-purple-eyes-kamado-nezuko-1-YKbre5j9KeU92PQP.jpg" />
                    ))}
                    <Text spacing="0px 20px" variant="normal">Curtido por 10.098</Text>
                    <Box row justify="flex-end">
                        <Touchable width="24px" spacing="0px 15px 0px 0px" onPress={(() => alert('cliquei'))}>
                            <Icon name='heart' size={24} color={colors.danger} />
                        </Touchable>
                        <Touchable width="24px" spacing="0px 15px 0px 0px">
                            <Icon name='bubble' size={24} color={colors.muted} />
                        </Touchable>
                        <Touchable width="24px">
                            <Icon name='share' size={24} color={colors.muted} />
                        </Touchable>
                    </Box>
                </Box>
            </Box>
            <Spacer />
            <Text color="dark" small>A trilogia de filmes Demon Slayer: Kimetsu no Yaiba Castelo Infinito está prevista para ser lançada nos cinemas em 2024</Text>
        </Box>
    )
}