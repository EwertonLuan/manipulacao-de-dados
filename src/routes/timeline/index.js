import { Router } from 'express';
import DitoApi from '../../api';
import Timeline from '../../controllers/timeline.controllers';

const router = Router();
const ditoApi =  new DitoApi();
const timeline = new Timeline(ditoApi);

router.get('/timeline', (req, res) => timeline.get(req, res) );

export default router;