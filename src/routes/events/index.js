import { Router } from 'express';
import SiteEventController from '../../controllers/eventos.controllers';
import SiteEvent from '../../models/SiteEvent';
import Autocomplete from '../../controllers/autocomplete.controller';
import DitoEvents from '../../api';
import Timeline from '../../controllers/timeline';
import test from '../../controllers/teste';
import create from '../../controllers/createprodutos';

const router = Router();
const siteEventController = new SiteEventController(SiteEvent.SiteEvent);
const autocomplete = new Autocomplete(SiteEvent.SiteEvent);
const ditoEvents =  new DitoEvents();
const timeline = new Timeline(ditoEvents);



router.post('/', (req, res) => siteEventController.create(req, res));
router.get('/', test); 
router.get('/2', create); 
router.get('/autocomplete/:searche', (req, res) => autocomplete.get(req, res));
router.get('/ditoapi', (req, res) => ditoEvents.get(req, res)); 
router.get('/timeline', (req, res) => timeline.get(req, res) );

export default router;