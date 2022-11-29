/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name:'video'} )
export class Video {

    @PrimaryGeneratedColumn({type: 'bigint'})
    id: number;
    
    @Column({nullable:true})
    name: string;

    @Column({nullable:true})
    url: string;

    @Column({nullable:true})
    id_Category: string;

}
