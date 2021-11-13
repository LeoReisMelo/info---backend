import {Router} from 'express';
import { VehicleController } from '../../app/controllers/vehicles.controller';

const routes = Router();
const vehicleController = new VehicleController();

routes.get('/vehicles', vehicleController.list);
routes.get('/vehicle', vehicleController.findById);

routes.post('/vehicle', vehicleController.create);

routes.put('/vehicle', vehicleController.update);

routes.delete('/vehicle', vehicleController.delete);

export{ routes };