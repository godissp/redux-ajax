# redux-ajax
redux-ajax是一款redux中间件，依赖于jquery

# redux-ajax demo
1.store中引入redux-ajax
  import { createStore, applyMiddleware } from 'redux'
  import ajaxMiddleware from 'redux-ajax'
  const createStoreWithMiddleware = applyMiddleware(
      ajaxMiddleware
  )(createStore)
  const store = createStoreWithMiddleware(rootReducer, initialState)
  
2.action中加入相关一部action
  export function getRemoteData(url) {
      return {
          type: GET_REMOTE_DATA,
          ajax:true,
          ajaxParam:{
              url: url,
              type: 'get',
              dataType: 'json'
          },
          callBack(v,dispatch){
              //此为ajax的回调函数
          },
          failCallBack(v,dispatch){
              //此为ajax的失败回调函数
          }
      }
  }
