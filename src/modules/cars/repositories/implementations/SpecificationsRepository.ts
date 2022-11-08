import { getRepository, Repository } from "typeorm";

import { Specification } from "../../entities/Specification";
import {
  ISpecifactionsRepository,
  ICreateSpecificationDTO,
} from "../ISpecificationsRepository";

class SpecificationsRepository implements ISpecifactionsRepository {
  private respository: Repository<Specification>;
  constructor() {
    this.respository = getRepository(Specification);
  }

  async create({ description, name }: ICreateSpecificationDTO) {
    const specification = this.respository.create({
      name,
      description,
    });

    await this.respository.save(specification);
  }

  async findByName(name: string): Promise<Specification | undefined> {
    const specification = await this.respository.findOne({ name });

    return specification;
  }
}

export { SpecificationsRepository };
