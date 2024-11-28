import { Title, Text, Box, Button, Spacer } from '../../components'

export function Home() {
    return (
        <Box justify="center" hasPadding align="center" background="gray50">
            <Box justify="center" align="center" fluid>
                <Title color="light" variant="big" bold>LOOKAPP</Title>
                <Spacer />
                <Text align="center" spacing="0px 40px" variant="big" bold>Fique por dentro do mundo da moda
                    e compre seus looks favoritos.</Text>
            </Box>
            <Box justify="flex-end" align="center" fluid>
                <Button block>
                    <Text color="light" variant="big">Fazer login em minha conta</Text>
                </Button>
                <Spacer size="20px" />
                <Text color="light" variant="big" underline onPress={(() => alert('teste'))}>Criar nova conta</Text>
                <Spacer size="70px" />
            </Box>
        </Box>
    )
}