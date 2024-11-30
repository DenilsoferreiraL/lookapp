
import { Post } from '../Post/index'
import { Text, Box } from '../../components/index'

export function PostList() {
    return (
        <Box>
            {Array.from(Array(5))?.map(item => (
                <Post />
            ))}
        </Box>
    )
}