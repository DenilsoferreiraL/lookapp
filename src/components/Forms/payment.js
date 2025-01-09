import React, { useEffect, useRef, useState } from 'react';
import { Box, Input, Spacer, Text, Title, Touchable } from "..";
import SegmentedPicker from 'react-native-segmented-picker';

export function PaymentForm({ onChange = (creditCardData) => { } }) {

    const [data, setData] = useState({
        holder_name: '',
        number: '',
        valid_date: '',
        cvv: ''
    })

    const pickerRef = useRef(null)

    useEffect(() => {
        onChange(data)
    }, [data])

    return (
        <>
            <SegmentedPicker
                ref={pickerRef}
                onConfirm={data => setData({
                    ...data,
                    valid_date: `${data.month}/${data.year}`
                })}
                options={[
                    {
                        key: 'month',
                        items: [
                            { label: 'Option 1', value: 'option_1' },
                            { label: 'Option 2', value: 'option_2' },
                        ],
                    },
                    {
                        key: 'year',
                        items: [
                            { label: 'Option 3', value: 'option_3' },
                        ],
                    },
                ]}
            />
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
                <Touchable width="100%" onPress={() => pickerRef.current.show()}>
                    <Input
                        pointerEvents='none'
                        editable={false}
                        inputMode="numeric"
                        placeholder="09/25"
                    />
                </Touchable>
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
