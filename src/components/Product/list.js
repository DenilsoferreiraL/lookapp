import { Product } from ".";
import { ScrollView } from "..";


export function ProductList() {
    return (
        <ScrollView style={{
            paddingTop: 10,
            paddingLeft: 10,
            paddingRight: 10
        }}>
            {Array.from(Array(4))?.map(item => (
                <Product />
            ))}

        </ScrollView>
    )
}