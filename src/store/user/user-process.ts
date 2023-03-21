import { createSlice } from '@reduxjs/toolkit';
import { NewUser } from '../../types/user';
import { NameSpace } from '../../const';
import { fetchUserAction } from './user-process-action';

type UserState = {
	loading: boolean,
	rejected: boolean,
	successful: boolean,
}

type InitialState = {
	userState: UserState
};

const initialState: InitialState = {
	userState: {
		loading: false,
		rejected: false,
		successful: false,
	}
}

const userProcess = createSlice({
	name: NameSpace.USER,
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder.addCase(fetchUserAction.fulfilled, (state) => {
			state.userState.successful = true;
			state.userState.loading = false;

		})
			.addCase(fetchUserAction.pending, (state) => {
				state.userState.loading = true;
				state.userState.successful = false;
				state.userState.rejected = false;
			})
			.addCase(fetchUserAction.rejected, (state) => {
				state.userState.rejected = true;
				state.userState.loading = false;
			});
	},
})

export default userProcess;