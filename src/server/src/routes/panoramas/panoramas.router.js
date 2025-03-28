import { Router } from 'express';
import {
    httpGetPanorama,
    httpGetPanoramaScene,
    httpUploadPanorama,
    httpUpdatePanoramaScene
} from './panoramas.controller.js';

const panoramasRouter = Router();

// panoramasRouter.get('/panoramas', httpGetPanorama);
panoramasRouter.get('/panoramas', httpGetPanoramaScene);
panoramasRouter.post('/panoramas', httpUploadPanorama); // middleware authentication/authorize admin
panoramasRouter.put('/panoramas/:sceneId', httpUpdatePanoramaScene);  // middleware authentication/authorize admin

export default panoramasRouter;