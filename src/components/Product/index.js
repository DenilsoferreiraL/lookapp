import { Box, Cover, Spacer, Text, Touchable } from "..";
import women from '../../assets/women.png';

export function Product({ cover, brand, title, price }) {

    return (
        <Touchable
            row
            fluid
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
                source={cover}
            >
            </Cover>

            <Box style={{
                paddingTop: 0,
                paddingBottom: 0
            }} >
                <Text color="dark">{brand}</Text>
                <Spacer />
                <Text color="dark" bold>{title}</Text>
                <Spacer />
                <Spacer />
                <Box row width="100%" justify="space-between">
                    <Text color="dark">{price}</Text>
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
