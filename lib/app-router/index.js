/**
 *****************************************
 * Created by lifx
 * Created on 2017-11-26 14:23:39
 *****************************************
 */
'use strict';


/**
 *****************************************
 * 加载依赖
 *****************************************
 */
import AppRouter from './index.jsx';
import * as reducers from './reducers';
import withRouter from './route';


/**
 *****************************************
 * 抛出模块
 *****************************************
 */
export default AppRouter;
export { reducers, withRouter };
