import { Title, Text, Box, Touchable, Cover } from '../../components'
import { colors } from '../../styles/theme.json'

export function Story() {
    return (
        <Touchable onPress={() => alert('cliquei')}
            background="dark"
            radius="10px"
            height="190px"
            spacing="0px 10px 0px"
            width="150px" >
            <Cover width="100%" height="100%" image="https://cinefera.com.br/wp-content/uploads/2024/07/Nezuko-Kamado-Demon-Slayer-1.webp">
                <Box hasPadding background={`${colors.dark}80`} fluid justify="space-between" >
                    <Cover
                        circle
                        border={`1px solid ${colors.light}`}
                        width="40px"
                        height="40px"
                        image="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=812,h=507,fit=crop/AR0b5XDqBBFnQQRV/thumb2-nezuko-kamado-manga-kimetsu-no-yaiba-girl-with-purple-eyes-kamado-nezuko-1-YKbre5j9KeU92PQP.jpg" />
                    <Box height="50px" justify="flex-end">
                        <Text bold color="light" variant="big">Nezuko</Text>
                        <Text color="light">2 mins ago</Text>
                    </Box>
                </Box>
            </Cover>
        </Touchable>
    )
}