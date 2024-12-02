import { Title, Text, Box, Button, Spacer, Input } from '../../components'

import { StatusBar } from 'react-native'

export function Signin({ navigation: { navigate, replace } }) {
    return (
        <>
            <StatusBar barStyle="dark-content" />
            <Box justify="center" hasPadding align="center" background="light">
                <Title color="black" variant="big" bold>LOOKAPP</Title>
                <Spacer size="50px" />
                <Title align="center" >Fazer login</Title>
                <Spacer size="50px" />
                <Spacer />
                <Input placeholder='Nome' />
                <Spacer />
                <Input placeholder='Senha' secureTextEntry />
                <Spacer size="50px" />
                <Button block onPress={() => replace('Feed')} >
                    <Text color="light" variant="big">Login</Text>
                </Button>
                <Spacer size="20px" />
                <Text color="black" variant="big" underline onPress={() => navigate('Singup')}>Criar nova conta</Text>
                <Spacer size="70px" />
            </Box>
        </>
    )
}