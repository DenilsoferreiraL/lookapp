import { Product } from ".";
import { ScrollView } from "..";
import women from '../../assets/women.png';


export function ProductList() {
    return (
        <ScrollView style={{
            paddingTop: 10,
            paddingLeft: 10,
            paddingRight: 10
        }}>
            {Array.from(Array(4))?.map(item => (
                <Product
                    cover={women}
                    brand="Eliane"
                    title="Casaco de frio"
                    price="R$ 350"
                />
            ))}

        </ScrollView>
    )
}