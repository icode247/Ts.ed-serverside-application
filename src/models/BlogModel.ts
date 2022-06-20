import { Property, Required } from "@tsed/schema";
import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn,ManyToOne} from "typeorm";

@Entity()
export class BlogModel {
  @Property()
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  @Required()
  title: string;

  @Column()
  @Required()
  content: string;

  @Column()
  coverImage: string;

  @Column()
  @CreateDateColumn()
  createdAt: Date;

  @Column()
  @UpdateDateColumn()
  updatedAt: Date;
}
