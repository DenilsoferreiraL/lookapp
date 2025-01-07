import { StatusBar } from "expo-status-bar";
import { Box, Button, Spacer, Text, Title, Touchable } from "../../components";
import { Header } from "../../components/Header";
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import { StretchyScrollView } from "react-native-stretchy";
import util from "../../util";
import { colors } from '../../styles/theme.json'

export function Product() {
    return (
        <>
            <StatusBar barStyle="dark-content" />
            <Header
                title={'Nome do Produto'}
                goBack
                right={() => (
                    <Touchable width="70px" align="center" onPress={() => alert('teste')} >
                        <Icon name="bag" size={25} />
                    </Touchable>
                )}
            />
            <StretchyScrollView
                image={{
                    uri: 'https://i.pinimg.com/736x/13/8f/d8/138fd8c5927171a26521bd234898153f.jpg'
                }}
                imageOverlay={
                    <Box background={util.toAlpha(colors.dark, 40)}></Box>
                }
                foreground={
                    <Box hasPadding justify='flex-end'>
                        <Title bold color='light' variant='big'>R$ 350</Title>
                    </Box>
                }>
                <Box hasPadding background="light">
                    <Text color='black'>Shirts</Text>
                    <Spacer size='20px' />
                    <Title>A.P.C. Collection Spring 2015</Title>
                    <Spacer size='30px' />
                    <Text color="dark" variant="big">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam incidunt ratione, at ducimus iste impedit quibusdam? Hic repellat magnam, deserunt labore quo accusantium totam odio quasi beatae culpa dolore porro.
                    </Text>
                    <Spacer size='30px' />
                    <Text color="dark" variant="big">
                        Lorem ipsum dolor  amet consectetur adipisicing elit.
                    </Text>
                    <Spacer size='30px' />
                    <Button block >
                        <Text color="light" variant="big">Adicionar ao Carrinho</Text>
                    </Button>
                </Box>
            </StretchyScrollView>
        </>
    );
}
