import { Effect, Subscription } from 'dva';
import { Reducer } from 'redux';
import { getRemoteTopic,getRemoteSiteStats } from './service';

export interface TopicState {
  data?: Array<Object>,
  topicNumber?: number,
  memberNumber?: number
}

interface TopicModelType {
  namespace: 'topics';
  state: TopicState;
  reducers: {
    getList: Reducer<TopicState>;
    getSiteStats: Reducer<TopicState>;
  };
  effects: {
    getRemote: Effect;
    getRemoteStats: Effect;
  };
}

const TopicModel: TopicModelType = {
  namespace: 'topics',
  state: {
    topicNumber: 0,
    memberNumber: 0,
    data: [],
  },
  reducers: {
    getList(state, { payload }) {
      return { ...state,data: payload };
    },
    getSiteStats(state, { payload }) {
      const { topic_max,member_max } = payload
      return { ...state,topicNumber:topic_max,memberNumber:member_max }
    }
  },
  effects: {
    *getRemote({ payload: { id } }, { put, call }) {
      const data = yield call(getRemoteTopic, id);
      if (data) {
        yield put({
          type: 'getList',
          payload: data,
        });
      }
    },
    *getRemoteStats(action,{ put, call }){
      const data = yield call(getRemoteSiteStats);
      if (data) {
        yield put({
          type: 'getSiteStats',
          payload: data,
        });
      }
    }
  },
};

export default TopicModel;
