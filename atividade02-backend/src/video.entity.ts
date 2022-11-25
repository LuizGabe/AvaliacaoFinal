import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name:'video'} )
export class Video {

    @PrimaryGeneratedColumn({ name:'id' })
    id?: number;
    
    @Column({ name: 'name', type: 'text'})
    name: string;

    @Column({ name: 'url', type: 'text'})
    url: string;

    @Column({ name: 'Id_Category', type: 'int'})
    id_Category: string;

}
