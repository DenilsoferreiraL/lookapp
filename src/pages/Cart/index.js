import { StatusBar } from "expo-status-bar";
import { Header } from "../../components/Header";
import { Tabs } from "../../components/Tabs";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

export function Cart() {

    const navigate = useNavigation()

    const [tab, setTab] = useState('carrinho');

    return (
        <>
            <StatusBar barStyle="dark-content" />
            <Header title="Carrinho" goBack />
            <Tabs
                tabs={[
                    { label: 'Carrinho', value: 'carrinho' },
                    { label: 'Pagamento', value: 'pagamento' },
                ]}
                active={tab}
                onChange={(value) => setTab(value)}
            />
        </>
    )
}