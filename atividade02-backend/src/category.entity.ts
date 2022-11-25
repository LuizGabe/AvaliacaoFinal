import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name:'category'} )
export class Category {

    @PrimaryGeneratedColumn({ name:'id' })
    id?: number;
    
    @Column({ name: 'video_Category', type: 'text'})
    video_Category: string;
}