import React, { useState, useEffect, useContext } from 'react';
import { TopicState } from './model';
import { Dispatch } from 'dva';
import LightStyles from '@/layouts/lightStyle.less';
import DarkStyles from '@/layouts/darkStyle.less';
import { connect } from 'dva';
import Tabs from '@/components/Tabs';
// import { ThemeContext } from '@pages/context/context'
// import axios from 'axios'
import PageItem from '@/components/pageItem';
import SiteStats from '@/components/siteStats';
import throttle from '@/utils/throttle';

type Props = {
  topics: Object;
  dispatch: Dispatch;
  match: any;
};

const Home: React.FC<Props> = (props) => {
  const [width, setWidth] = useState(window.innerWidth);
  const { topics, dispatch } = props;
  // const { darkMode } = useContext(ThemeContext)
  // let Styles = darkMode ? DarkStyles : LightStyles
  console.log('data', topics);
  const getRemoteTopic = (id: number) => {
    dispatch({
      type: 'topics/getRemote',
      payload: {
        id,
      },
    });
  };
  useEffect(() => {
    document.title = 'v2ex-react';
    getRemoteTopic(props.match.params.id);
  }, [props.match.params.id]);
  useEffect(() => {
    const handleWindowResize = () => throttle(setWidth(window.innerWidth), 500);
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);
  return (
    <div className={LightStyles.container}>
      <div className={LightStyles.content}>
        <Tabs />
        {topics.data &&
          topics.data.map((item, index) => {
            return <PageItem key={index} {...item} />;
          })}
      </div>
      {width < 857 ? (
        <div />
      ) : (
        <div className={LightStyles.rightBar}>
          <SiteStats />
        </div>
      )}
    </div>
  );
};

const mapStateToProps = ({ topics }: { topics: TopicState }) => {
  return { topics };
};

export default connect(mapStateToProps)(Home);
