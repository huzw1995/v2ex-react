import axios from 'axios'
type initialContent = {
    title?: string, 
    username?: string, 
    contentHTML?: string,
    created?: string | number,
    replies?: string | number,
    last_touched?: string | number
}
export const getTopicDetail = async (id: number) =>{
    let topicContent : initialContent = {}
    let repliesContent : initialContent = {}
    return axios.get('/api/topics/' + id).then(response=>{
        topicContent.title = response.data[0].title
        document.title = topicContent.title
        topicContent.username = response.data[0].member.username
        topicContent.contentHTML = response.data[0].content_rendered
        topicContent.created = response.data[0].created
        repliesContent.replies = response.data[0].replies
        repliesContent.last_touched = response.data[0].last_touched
        return [topicContent,repliesContent]
    }).catch(err=>false)
}