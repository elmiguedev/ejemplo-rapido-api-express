import { Cosa } from "../../models/cosa/Cosa";
import { CosaRepository } from "./CosaRepository";

export class InMemoryCosaRepository implements CosaRepository {
  private cosas: Cosa[] = [];

  get(id: string): Promise<Cosa> {
    const cosa = this.cosas.find((cosa) => cosa.id === id);
    if (!cosa) {
      throw new Error("Cosa not found");
    }
    return Promise.resolve(cosa);
  }
  getAll(): Promise<Cosa[]> {
    return Promise.resolve(this.cosas);
  }
  create(data: Cosa): Promise<Cosa> {
    data.id = this.cosas.length.toString();
    this.cosas.push(data);
    return Promise.resolve(data);
  }
  update(data: Cosa): Promise<Cosa> {
    const index = this.cosas.findIndex((cosa) => cosa.id === data.id);
    if (index === -1) {
      throw new Error("Cosa not found");
    }
    this.cosas[index] = data;
    return Promise.resolve(data);
  }
  delete(id: string): Promise<Cosa> {
    const index = this.cosas.findIndex((cosa) => cosa.id === id);
    if (index === -1) {
      throw new Error("Cosa not found");
    }
    const cosa = this.cosas[index];
    this.cosas.splice(index, 1);
    return Promise.resolve(cosa);
  }

}