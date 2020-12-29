import React, { useState, useEffect, useContext, Fragment } from 'react';
import { TopicState } from './model';
import LightStyles from '@/layouts/lightStyle.less';
import DarkStyles from '@/layouts/darkStyle.less';
import { Dispatch, connect } from 'dva';
import { Loading } from 'umi'
import Tabs from '@/components/Tabs';
import { ThemeContext } from '@/theme/context'
import PageItem from '@/components/pageItem';
import SiteStats from '@/components/siteStats';
import throttle from '@/utils/throttle';
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

type Props = {
  topics: TopicState;
  dispatch: Dispatch;
  match: any;
  topicsLoading: Boolean
};

const Home: React.FC<Props> = (props) => {
  const [width, setWidth] = useState(window.innerWidth);
  const { dispatch, topicsLoading } = props;
  const { data, topicNumber, memberNumber } = props.topics
  const { darkMode } = useContext(ThemeContext)
  let Styles = darkMode ? DarkStyles : LightStyles
  const getRemoteTopic = (id: number) => {
    dispatch({
      type: 'topics/getRemote',
      payload: {
        id,
      },
    });
  };
  const getRemoteSiteStats = () => {
    dispatch({
      type: 'topics/getRemoteStats'
    });
  };
  useEffect(() => {
    document.title = 'v2ex-react';
    NProgress.start();
    getRemoteTopic(props.match.params.id);
  }, [props.match.params.id]);
  useEffect(()=>{
    if(!topicsLoading){
      NProgress.done()
    }
  },[topicsLoading])
  useEffect(() => {
    const handleWindowResize = () => throttle(setWidth(window.innerWidth), 500);
    window.addEventListener('resize', handleWindowResize);
    getRemoteSiteStats();
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);
  return (
    <Fragment>
      <div className={Styles.container}>
        <div className={Styles.content}>
          <Tabs />
          {data &&
            data.map((item, index) => {
              return <PageItem key={index} {...item} />;
            })}
        </div>
        {width < 857 ? (
          <div />
        ) : (
          <div className={Styles.rightBar}>
            <SiteStats topicNumber = {topicNumber} memberNumber = {memberNumber}/>
          </div>
        )}
      </div>
    </Fragment>
  );
};

const mapStateToProps = ({ topics, loading }: { topics: TopicState, loading: Loading }) => {
  return { topics, topicsLoading:loading.models.topics};
};

export default connect(mapStateToProps)(Home);