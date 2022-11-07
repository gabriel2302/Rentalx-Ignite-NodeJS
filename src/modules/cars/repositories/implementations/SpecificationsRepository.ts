import { Specification } from "../../models/Specification";
import {
  ISpecifactionsRepository,
  ICreateSpecificationDTO,
} from "../ISpecificationsRepository";

class SpecificationsRepository implements ISpecifactionsRepository {
  private specifications: Specification[];

  constructor() {
    this.specifications = [];
  }

  create({ description, name }: ICreateSpecificationDTO) {
    const specification = new Specification();

    Object.assign(specification, {
      description,
      name,
      created_at: new Date(),
    });

    this.specifications.push(specification);
  }

  findByName(name: string): Specification | undefined {
    const specification = this.specifications.find(
      (item) => item.name === name
    );

    return specification;
  }
}

export { SpecificationsRepository };
