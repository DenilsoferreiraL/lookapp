import { useNavigation } from "@react-navigation/native";
import { Box, Cover, Spacer, Text, Touchable } from "..";

export function Product({ cover, brand, title, price, selected = false }) {
    const { navigate } = useNavigation()
    return (
        <Touchable
            onPress={() => navigate('Product')}
            row
            fluid
            spacing={selected ? '10px 0' : "0px 0px 1px 0px"}
            background="light"
            hasPadding={!selected}
        >
            <Cover
                radius="5px"
                width="80px"
                height="80px"
                spacing="0 10px 0 0"
                source={{ uri: cover }}
            >
            </Cover>

            <Box style={{ paddingTop: 0, paddingBottom: 0 }} >
                {!selected && <Text color="dark">{brand}</Text>}
                <Spacer />
                <Text color="dark" bold>{title}</Text>
                <Spacer />
                {selected && (
                    <Box>
                        <Text color="dark">Tamanho: GG</Text>
                    </Box>
                )}
                <Spacer />
                <Box row width="100%" justify="space-between">
                    <Text color="dark">{price}</Text>
                    <Text
                        color="danger"
                        bold
                        onPress={() => alert('Teste')}>{selected ? 'remover' : 'adicionar'}
                    </Text>
                </Box>
            </Box>

        </Touchable >
    );
}
