import axios from 'axios';

export type topicObj = {
  avartar?: string;
  title?: string;
  nodeName?: string;
  userName?: string;
  last_modified?: number | undefined;
  last_reply_by?: string;
  replies?: string;
  id?: number;
};
export const getRemoteTopic = async (id: number) => {
  const tabItemIdArr = ['/hot', '/latest'];
  return axios
    .get('/api/topics' + tabItemIdArr[id])
    .then((responce) => {
      let topicArr: Array<Object> = [];
      let topicObj: topicObj = {};
      responce.data.forEach((item: any) => {
        topicObj.avartar = item.member.avatar_normal;
        topicObj.title = item.title;
        topicObj.nodeName = item.node.title;
        topicObj.userName = item.member.username;
        topicObj.replies = item.replies;
        topicObj.last_modified = item.last_modified;
        topicObj.last_reply_by = item.last_reply_by;
        topicObj.id = item.id;
        topicArr.push(topicObj);
        topicObj = {};
      });
      return topicArr;
    })
    .catch((err) => false);
};
