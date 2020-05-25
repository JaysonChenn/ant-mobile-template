import Loadable from 'react-loadable';

/**
 * @description 通用的过场组件
 */
const loadingComponent = (props) => {
  if (props.error) {
    return null;
  } else if (props.pastDelay) {
    return null;
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
