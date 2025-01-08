import React, { useState } from 'react';
import { Box, Input, Spacer, Text, Title } from "..";

export function PaymentForm({ onChange = (creditCardData) => { } }) {

    const [data, setData] = useState({
        holder_name: '',
        number: '',
        valid_date: '',
        cvv: ''
    })

    return (
        <>
            <Box>
                <Title variant="small">Dados de Pagamento</Title>
                <Spacer />
                <Text color="dark">Ao continuar, você concorda com nossos Termos</Text>
                <Spacer size="20px" />

                {/* Nome Completo */}
                <Input
                    inputMode="text"
                    placeholder="Nome Completo"
                    value={data.holder_name}
                    onChangeText={(holder_name) => setData({ ...data, holder_name })}
                />

                <Spacer />

                {/* Número do Cartão */}
                <Input
                    inputMode="numeric"
                    placeholder="Número do Cartão"
                    onChangeText={(number) => setData({ ...data, number })}
                />
                <Spacer />

                {/* Data de Validade */}
                <Input
                    inputMode="numeric"
                    placeholder="09/25"
                />
                <Spacer />

                <Box row fluid align="center">
                    {/* CVV */}
                    <Box spacing="0 10px 0 0">
                        <Input
                            inputMode="numeric"
                            placeholder="CVV"
                            onChangeText={(cvv) => setData({ ...data, cvv })}
                        />
                    </Box>
                    <Box>
                        <Text variant="normal" color="muted">3 ou 4 dígitos localizados na faixa de assinatura do cartão</Text>
                    </Box>
                </Box>

                <Spacer />
            </Box>
        </>
    );
}
