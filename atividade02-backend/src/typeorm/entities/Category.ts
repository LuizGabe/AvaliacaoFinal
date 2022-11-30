/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name:'category'} )
export class Video {

    @PrimaryGeneratedColumn({type: 'bigint'})
    id: number;
    
    @Column()
    name: string;
}
