import React from 'react';
import Loadable from 'react-loadable';
import '../style/public.css';

/**
 * @description 通用的过场组件
 * @param { 可选条件: props.error: 报错时, props.pastDelay: 如加载过慢启动过渡 }
 */
const loadingComponent = (props) => {
  if (props.error) {
    return null;
  } else if (props.pastDelay) {
    return (
      <div className='load-box'>
        <div className='loading'></div>
      </div>
    );
  } else {
    return null;
  }
};

export default (loader, loading = loadingComponent) => {
  return Loadable({
    loader,
    loading,
  });
};
