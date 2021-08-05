import produce from 'immer';
import * as ActionTypes	from './ActionTypes';

export interface IloginState {
    userInfo: {
		[key: string]: string | number,
	},
}

declare interface IAction {
    type: string;
    data: any;
	receivedData: any
}
//生产环境应当设置为空
const loginState:IloginState = {  // 所得及所见，非可编辑编辑
	userInfo: {
		userName: '2222'
    },
}

export default function handleHome(state = loginState, action: IAction) {
	return ({
		[ActionTypes.GET_USER_INFO]  : () => {
			state = produce(state, draft => {
				draft.userInfo = action.receivedData
			})

			return state
		}
	}[action.type] || (() => state))();
}