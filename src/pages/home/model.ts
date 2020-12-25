import { Effect, Subscription } from 'dva';
import { Reducer } from 'redux';
import { getRemoteTopic } from './service';

export interface TopicState {
  data: Array<Object>;
}

interface TopicModelType {
  namespace: 'topics';
  state: TopicState;
  reducers: {
    getList: Reducer<TopicState>;
  };
  effects: {
    getRemote: Effect;
  };
}

const TopicModel: TopicModelType = {
  namespace: 'topics',
  state: {
    data: [],
  },
  reducers: {
    getList(state, { payload }) {
      return { data: payload };
    },
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
  },
};

export default TopicModel;
