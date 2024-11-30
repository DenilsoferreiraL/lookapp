import { Text, Box, ScrollView } from '../../components'
import { Story } from './index'

export function StoryList() {
    return (
        <Box fluid height="260px">
            <Box row fluid justify="space-between" hasPadding height="60px">
                <Text bold color="dark">Stories</Text>
                <Text bold color="danger" underline>Mostrar tudo</Text>
            </Box>
            <ScrollView key="id" horizontal style={{
                paddingLeft: 20,
            }}>
                {Array.from(Array(5))?.map(item => (
                    <Story />
                ))}
            </ScrollView>
        </Box>
    )
}