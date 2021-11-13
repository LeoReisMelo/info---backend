import { EntityRepository, Repository } from "typeorm";
import { VehiclesEntity } from '../entities/vehicles/vehicle.entity';

@EntityRepository(VehiclesEntity)
class VehicleRepository extends Repository<VehiclesEntity>{}

export{ VehicleRepository }