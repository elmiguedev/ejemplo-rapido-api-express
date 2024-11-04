import { Cosa } from "../../models/cosa/Cosa";

export interface CosaRepository {
  get(id: string): Promise<Cosa>;
  getAll(): Promise<Cosa[]>;
  create(data: Cosa): Promise<Cosa>;
  update(data: Cosa): Promise<Cosa>;
  delete(id: string): Promise<Cosa>;
}