import { Effect, Subscription } from 'dva';
import { Reducer } from 'redux';
import { getTopicDetail } from './service';

export interface Content {
    title?: string, 
    username?: string, 
    contentHTML?: string,
    created?: string | number,
    replies?: string | number,
    last_touched?: string | number
}

export interface Data{
    topicContent?:Content,
    replyContent?:Content
}

interface TopicDetailModelType {
  namespace: 'topicDetail';
  state: Data;
  reducers: {
    getTopicDetail: Reducer<Data>;
    getReplyDetail: Reducer<Data>;
  };
  effects: {
    getRemote: Effect
  };
}

const TopicDetailModel: TopicDetailModelType = {
  namespace: 'topicDetail',
  state: {
    topicContent:{},
    replyContent:{}
  },
  reducers: {
    getTopicDetail(state, { payload }) {
      return { ...state,topicContent: payload };
    },
    getReplyDetail(state, { payload }) {
      return { ...state,replyContent: payload }
    }
  },
  effects: {
    *getRemote({ payload: { id } }, { put, call }) {
      const data = yield call(getTopicDetail, id);
      if (data) {
        yield put({
          type: 'getTopicDetail',
          payload: data[0]
        });
        yield put({
          type: 'getReplyDetail',
          payload: data[1]
        });
      }
    }
  },
};

export default TopicDetailModel;
