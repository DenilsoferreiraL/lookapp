import { StatusBar } from "expo-status-bar";
import { Header } from "../../components/Header";
import { Tabs } from "../../components/Tabs";
import { useState } from "react";
import { Box, Button, ScrollView, Spacer, Text, Title } from "../../components";
import { Product } from "../../components/Product";
import { PaymentForm } from "../../components/Forms/payment";

export function Cart() {

    const [tab, setTab] = useState('carrinho');

    return (
        <>
            <StatusBar barStyle="dark-content" />
            <Header title="Finalizar" goBack />
            <Tabs
                tabs={[
                    { label: 'Carrinho', value: 'carrinho' },
                    { label: 'Pagamento', value: 'pagamento' },
                ]}
                active={tab}
                onChange={(value) => setTab(value)}
            />
            <ScrollView hasPadding background="light">
                <Spacer size="20px" />
                <Title variant="small">O número do pedido é 123456</Title>
                <Spacer size="20px" />

                {tab === 'carrinho' && (
                    <>
                        {
                            Array.from(Array(1))?.map(item => (
                                <Product
                                    cover="https://i.pinimg.com/736x/13/8f/d8/138fd8c5927171a26521bd234898153f.jpg"
                                    brand="Shirts"
                                    title="A.P.C. Collection Spring 2015"
                                    price="R$ 350"
                                    selected
                                />
                            ))
                        }
                        <Spacer size="30px" />
                        <Box row width="100%" height="25px" justify="space-between" >
                            <Text color="dark">Pedido:</Text>
                            <Text color="dark">R$ 350</Text>
                        </Box>

                        <Box row width="100%" height="25px" justify="space-between" >
                            <Text color="dark">Desconto:</Text>
                            <Text color="success">R$- 50</Text>
                        </Box>

                        <Box row width="100%" height="25px" justify="space-between" >
                            <Text color="dark">Entrega:</Text>
                            <Text color="dark">R$ 10</Text>
                        </Box>

                        <Box row width="100%" height="25px" justify="space-between" >
                            <Text color="dark" bold>Total:</Text>
                            <Text color="dark" bold>R$ 310</Text>
                        </Box>
                        <Spacer size="30" />
                        <Button block onPress={() => setTab('pagamento')}>
                            <Text color="light" variant="big">Finalizar Pedido</Text>
                        </Button>
                    </>
                )}

                {tab === 'pagamento' && (
                    <>
                        <Box>
                            <Spacer size="20px" />
                            <Box row width="100%" justify="space-between"
                                style={{
                                    borderBottomWidth: 0.5,
                                    borderBottomColor: '#dedede',
                                    paddingBottom: 10
                                }}
                            >
                                <Text color="dark" bold variant="big">Endereço de entrega</Text>
                                <Text color="danger">Alterar</Text>
                            </Box>
                            <Spacer />
                            <Text color="dark">Av. Paranaíba, 1433 - Centro, Araguaína - TO, 77803-100</Text>
                        </Box>
                        <Spacer />
                        <Box>
                            <Spacer size="20px" />
                            <Box row width="100%" justify="space-between"
                                style={{
                                    borderBottomWidth: 0.5,
                                    borderBottomColor: '#dedede',
                                    paddingBottom: 10
                                }}>
                                <Text color="dark" bold variant="big">Detalhes da entrega</Text>
                                <Text color="danger">Alterar</Text>
                            </Box>
                            <Spacer />
                            <Text color="dark" >Entrega padrão</Text>
                            <Text color="dark">De sábado (27) a terça-feira (30)</Text>
                            <Text color="dark">Custo: R$ 10</Text>
                        </Box>
                        <Spacer size="50px" />
                        <PaymentForm onChange={(creditCardData) => { }} />
                        <Spacer size="30px" />
                        <Button block onPress={() => setTab = {}}>
                            <Text color="light" variant="big">Confirmar</Text>
                        </Button>

                    </>
                )}
            </ScrollView >
        </>
    )
}