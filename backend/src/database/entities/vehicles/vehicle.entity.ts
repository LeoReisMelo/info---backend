import {Entity, Column} from "typeorm";
import { BaseEntity } from "../base/base.entity";
import {v4 as uuid} from 'uuid';

@Entity()
export class VehiclesEntity extends BaseEntity{
    @Column()
    board: string;

    @Column()
    chassis: string;

    @Column()
    brand: string;

    @Column()
    model: string;

    @Column()
    renavam: number;

    @Column()
    year: number;

    constructor(){
        super();
        if(!this.id){
            this.id = uuid();
        }
    }
}
