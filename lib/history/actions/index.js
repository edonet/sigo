/**
 *****************************************
 * Created by lifx
 * Created on 2017-11-20 11:09:42
 *****************************************
 */
'use strict';


/**
 *****************************************
 * 加载依赖
 *****************************************
 */
import { UPDATE_APP_HISTORY } from './types';
import { updateHistory, updateContext, updateRouteBlock } from './model';
import history from './history';


/**
 *****************************************
 * 历史记录接口
 *****************************************
 */
export default history;


/**
 *****************************************
 * 更新数据模型接口
 *****************************************
 */
export { updateHistory, updateContext as updateRouteContext, updateRouteBlock };


/**
 *****************************************
 * 更新历史记录
 *****************************************
 */
export function updateAppHistory(data) {
    return data && { type: UPDATE_APP_HISTORY, data };
}


