import { getCustomRepository, Repository } from "typeorm";
import { VehiclesEntity } from "../../database/entities/vehicles/vehicle.entity";
import { VehicleRepository } from "../../database/repositories/vehicles.repository";

interface IVehicleCreate{
    board?: string
    chassis?: string
    brand?: string
    model?: string
    renavam?: number
    year?: number
}

class VehicleService{
    private vehiclesRepository: Repository<VehiclesEntity>
    constructor(){
        this.vehiclesRepository = getCustomRepository(VehicleRepository);
    }
    async create({board, chassis, brand, model, renavam, year}: IVehicleCreate){
        const vehicle = this.vehiclesRepository.create({
            board,
            chassis,
            brand,
            model,
            renavam,
            year
        });

        await this.vehiclesRepository.save(vehicle);

        return vehicle;
    }

    async list(){
        const vehicles = this.vehiclesRepository.findAndCount({order: {updatedAt: 'DESC'}});

        return vehicles;
    }

    async findById(id: string){
        const vehicle = this.vehiclesRepository.findOne(id);

        return vehicle;
    }

    async update(id: string, {board, chassis, brand, model, renavam, year}: IVehicleCreate){
        const vehicle = this.vehiclesRepository.update({
            id
        }, {
            board,
            brand,
            model,
            year,
            chassis,
            renavam
        })

        return vehicle;
    }

    async delete(id: string){
        this.vehiclesRepository.delete(id)

        return "Vehicle successfully deleted";
    }
}

export { VehicleService };