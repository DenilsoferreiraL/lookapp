import { Product } from ".";
import { ScrollView } from "..";


export function ProductList() {
    return (
        <ScrollView style={{
            paddingTop: 10,
            paddingLeft: 10,
            paddingRight: 10
        }}>
            {Array.from(Array(1))?.map(item => (
                <Product
                    key={item}
                    cover="https://i.pinimg.com/736x/13/8f/d8/138fd8c5927171a26521bd234898153f.jpg"
                    brand="Shirts"
                    title="A.P.C. Collection Spring 2015"
                    price="R$ 350"
                />
            ))}
        </ScrollView>
    )
}