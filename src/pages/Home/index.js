import { StatusBar } from 'react-native'
import { Title, Text, Box, Button, Spacer } from '../../components'

export function Home({ navigation: { navigate } }) {
    return (
        <>
            <StatusBar barStyle="light-content" />
            <Box justify="center" hasPadding align="center" background="dark">
                <Box justify="center" align="center" fluid>
                    <Title color="light" variant="big" bold>LOOKAPP</Title>
                    <Spacer />
                    <Text align="center" spacing="0px 40px" variant="big" bold>Fique por dentro do mundo da moda
                        e compre seus looks favoritos.</Text>
                </Box>
                <Box justify="flex-end" align="center" fluid>
                    <Button block onPress={() => navigate('Signin')}>
                        <Text color="light" variant="big">Acessar minha conta</Text>
                    </Button>
                    <Spacer size="20px" />
                    <Text color="light" variant="big" underline onPress={() => navigate('Singup')}>Criar nova conta</Text>
                    <Spacer size="70px" />
                </Box>
            </Box>
        </>
    )
}