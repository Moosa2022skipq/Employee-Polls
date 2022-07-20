import React, {useEffect} from 'react';
import {authSelector} from "./features/auth/authSlice";
import Login from "./features/auth/LoginPage";
import {useAppDispatch, useAppSelector} from './app/hooks';
import {getQuestionsAsync} from "./features/poll/pollSlice";
import {getUsersAsync} from "./features/user/userSlice";
import AppReqs from './AppReqs';

function App() {
    const dispatch = useAppDispatch();
    const auth = useAppSelector(authSelector);


    useEffect(() => {
        if (!auth.isAuthenticated) {
            return;
        }

        dispatch(getQuestionsAsync());
        dispatch(getUsersAsync());
    }, [auth.isAuthenticated, dispatch]);

    if (!auth.isAuthenticated) {
        return (<Login/>);
    }

    return (
        <div>
               <AppReqs/>
        </div>
    );
}

export default App;
