import {Request, Response} from 'express';
import { VehicleService } from '../services/vehicles.service';


class VehicleController {
    async create(request: Request, response: Response) {
        const {board, chassis, brand, model, renavam, year} = request.body;
        const vehicleService = new VehicleService();

        if (!board || !chassis || !brand || !model || !renavam || !year) {
            return response.status(400).json({message: "MissingDataException, all fields are required"});
        }

        try{
            const vehicle = await vehicleService.create({
                board, chassis, brand, model, renavam, year
            });

            return response.json(vehicle);

        }catch(err){
            if (err instanceof Error) {
                return response.status(400).json({message: err.message});
            }
        }
    }

    async list(request: Request, response: Response) {
        const vehicleService = new VehicleService();

        try{
            const vehicles = await vehicleService.list()

            return response.json(vehicles);

        }catch(err){
            if (err instanceof Error) {
                return response.status(400).json({message: err.message});
            }
        }
    }

    async findById(request: Request, response: Response) {
        const { id } = request.query;
        const convertedId = String(id);
        const vehicleService = new VehicleService();

        if (!id) {
            return response.status(400).json({message: "Id is empty"});
        }

        try{
            const vehicle = await vehicleService.findById(convertedId);

            if (!vehicle) {
                return response.status(404).json({message: "Vehicle not found"});
            }

            return response.json(vehicle);

        }catch(err){
            if (err instanceof Error) {
                return response.status(400).json({message: err.message});
            }
        }
    }

    async update(request: Request, response: Response) {
        const { id } = request.query;
        const convertedId = String(id);
        const {board, chassis, brand, model, renavam, year} = request.body;
        const vehicleService = new VehicleService();

        if (!id) {
            return response.status(400).json({message: "Id is empty"});
        }
        if (!board || !chassis || !brand || !model || !renavam || !year) {
            return response.status(400).json({message: "MissingDataException, all fields are required"});
        }

        try{
            const vehicle = await vehicleService.findById(convertedId);

            if (!vehicle) {
                return response.status(404).json({message: "Vehicle not found"});
            }

            await vehicleService.update(convertedId, {board, chassis, brand, model, renavam, year});

            return response.json({message: "Vehicle updated successfully"});

        }catch(err){
            if (err instanceof Error) {
                return response.status(400).json({message: err.message});
            }
        }
    }

    async delete(request: Request, response: Response) {
        const { id } = request.query;
        const convertedId = String(id);
        const vehicleService = new VehicleService();

        if (!id) {
            return response.status(400).json({message: "Id is empty"});
        }

        try{
            const vehicle = await vehicleService.findById(convertedId);

            if (!vehicle) {
                return response.status(404).json({message: "Vehicle not found"});
            }

            await vehicleService.delete(convertedId);

            return response.json(vehicle);

        }catch(err){
            if (err instanceof Error) {
                return response.status(400).json({message: err.message});
            }
        }
    }
}

export{ VehicleController };

