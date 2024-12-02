import { StatusBar } from 'react-native'
import { Title, Text, Box, Button, Spacer, Input } from '../../components'

export function SingUp({ navigation: { navigate, replace } }) {

    return (
        <>
            <StatusBar barStyle="dark-content" />
            <Box justify="center" hasPadding align="center" background="light">
                <Title color="black" variant="big" bold>Criar nova conta</Title>
                <Text align="center" spacing="0px 40px" variant="big" bold>Informe seus dados:</Text>
                <Spacer size="50px" />
                <Spacer />
                <Input placeholder='Nome' />
                <Spacer />
                <Input placeholder='E-mail' />
                <Spacer />
                <Input placeholder='Senha' secureTextEntry />
                <Spacer size="50px" />
                <Button block onPress={() => replace('Feed')}>
                    <Text color="light" variant="big">Criar nova conta</Text>
                </Button>
                <Spacer size="20px" />
                <Text color="black" variant="big" underline onPress={() => navigate('Home')}>Ir para Home</Text>
                <Spacer size="70px" />
            </Box>
        </>
    )
}