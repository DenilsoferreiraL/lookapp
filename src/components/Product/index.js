import { Box, Cover, Spacer, Text, Touchable } from "..";
import women from '../../assets/women.png';

export function Product() {

    return (
        <Touchable
            row
            fluid
            justify="center"
            align="center"
            radius="15px"
            spacing="0px 0px 10px 0px"
            background="light"
            hasPadding
        >
            <Cover
                radius="5px"
                width="80px"
                height="80px"
                spacing="0 10px 0 0"
                source={women}
            >
            </Cover>

            <Box  >
                <Text color="dark">Eliane</Text>
                <Spacer />
                <Text color="dark" bold>Casaco grande listrado</Text>
                <Spacer />
                <Box row width="100%" justify="space-between">
                    <Text color="dark">R$350</Text>
                    <Text
                        color="danger"
                        bold
                        onPress={() => alert('Teste')}>Adicionar
                    </Text>
                </Box>
            </Box>

        </Touchable >
    );
}
