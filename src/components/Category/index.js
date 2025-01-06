import { Box, Cover, Spacer, Text, Title, Touchable } from "../../components";
import { useNavigation } from "@react-navigation/native";
import { colors } from '../../styles/theme.json'
import women from '../../assets/women.png';
import util from "../../util";

export function Category({ title, description }) {

    const { navigate } = useNavigation()

    return (
        <Touchable
            onPress={() => navigate('Category')}
            width="100%"
            height="180px"
            radius="10px"
            spacing="10px 0px">
            <Cover
                width="100%"
                height="100%"
                source={women}
            >
                <Box
                    width="100%"
                    justify="center"
                    align="center"
                    hasPadding
                    background={util.toAlpha(colors.black, 0)}
                >
                    <Title color="light" >{title}</Title>
                    <Spacer />
                    <Text color="light">{description}</Text>
                </Box>
            </Cover>
        </Touchable>
    );
}
