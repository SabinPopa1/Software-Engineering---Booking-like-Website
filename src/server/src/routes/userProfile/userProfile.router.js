import { Router } from 'express';
import {
    checkCredentialsAgainstDatabase,
    addCredentialsToDatabase,
    checkCookie,
    logout,
    saveHealthData,
    getUserInfo,
    editLoggedUserInfo
} from './userProfile.controller.js';

const userProfileRouter = new Router();

userProfileRouter.post('/login', checkCredentialsAgainstDatabase);
userProfileRouter.post('/signup', addCredentialsToDatabase);
userProfileRouter.get('/check-auth', checkCookie);
userProfileRouter.get('/logout', logout);
userProfileRouter.post('/saveHealthForm', saveHealthData);
userProfileRouter.get('/get-logged-user-info', getUserInfo);
userProfileRouter.post('/update-logged-user-info', editLoggedUserInfo);

export default userProfileRouter;