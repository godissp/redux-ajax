'use strict';

exports.__esModule = true;
exports['default'] = ajaxMiddleware;

function ajaxMiddleware(_ref) {
  var dispatch = _ref.dispatch;
  var getState = _ref.getState;

  return function (next) {
    return function (action) {
      if(action.ajax){
        var $ = require("jquery");
        if(action.ajaxParam){
          var promise = $.ajax(action.ajaxParam);
          promise.done(function(v){
            action.callBack(v,dispatch)
          })
          promise.fail(function(v){
            action.failCallBack(v,dispatch)
          })
        }else{
          console.log(action.type+" action 需设置ajaxParam参数");
        }
      }else{
        var returnedValue = next(action)
        return returnedValue
      }

    };
  };
}
module.exports = exports['default'];