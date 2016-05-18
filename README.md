# redux-ajax
redux-ajax是一款redux中间件，依赖于jquery

# redux-ajax demo
* store中引入redux-ajax
```javascript 
  import { createStore, applyMiddleware } from 'redux'
  import ajaxMiddleware from 'redux-ajax'
  const createStoreWithMiddleware = applyMiddleware(
      ajaxMiddleware
  )(createStore)
  const store = createStoreWithMiddleware(rootReducer, initialState)
```
  
* action中加入相关一部action
```javascript 
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
```
