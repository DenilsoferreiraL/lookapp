import { Category } from "./index";
import { ScrollView } from "../../components";


export function CategoryList() {
    return (
        <ScrollView fluid style={{
            paddingTop: 20,
            paddingLeft: 20,
            paddingRight: 20
        }}>
            {Array.from(Array(10))?.map(item => (
                <Category title={'Feminino'} description={'56 items'} />
            ))}

        </ScrollView>
    )
}