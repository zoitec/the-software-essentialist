import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('users') // This corresponds to the PostgreSQL table name
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 }) // Adjust the length as needed
  username: string;

  @Column({ length: 255 }) // Adjust the length as needed
  email: string;

  @Column({ length: 255 }) // Adjust the length as needed
  password: string;
}
