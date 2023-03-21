import { createAsyncThunk } from "@reduxjs/toolkit";
import { NewUser } from "../../types/user";
import { AxiosInstance } from "axios";
import { AppDispatch, State } from "../../types/state";
import { APIRoute } from "../../const";

export const fetchUserAction = createAsyncThunk<
NewUser,
NewUser,
{
    dispatch: AppDispatch,
    state: State,
    extra: AxiosInstance
}
>(
    'data/fetchUserAction',
     async (newUser, {extra: api}) => {
        console.log(newUser)
    const { data } = await api.post<NewUser>(APIRoute.CONTACT_US, newUser);

    return data;
});