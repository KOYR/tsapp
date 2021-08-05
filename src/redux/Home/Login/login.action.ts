import * as ActionTypes from './ActionTypes';

//获取账套列表 在进入首页后就立即发送
export const getUserInfo = () => (dispatch: any) => {
    
    const  userInfo = {
		userName: '2222'
    }
    dispatch({
        type: ActionTypes.GET_USER_INFO,
        receivedData:userInfo
    })
}