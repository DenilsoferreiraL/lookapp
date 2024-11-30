import { Box, ScrollView, Spacer } from '../../components'
import { Header } from '../../components/Header'
import { PostList } from '../../components/Post/list'
import { StoryList } from '../../components/Story/list'

export function Feed() {
    return (
        <Box background="light"  >
            <Header title={'Explorar'} />
            <ScrollView>
                <StoryList />
                <Spacer />
                <PostList />
            </ScrollView>
        </Box>
    )
}