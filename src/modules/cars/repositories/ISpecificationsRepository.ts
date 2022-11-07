import { Specification } from "../models/Specification";

interface ICreateSpecificationDTO {
  name: string;
  description: string;
}

interface ISpecifactionsRepository {
  create({ description, name }: ICreateSpecificationDTO): void;
  findByName(name: string): Specification | undefined;
}

export { ISpecifactionsRepository, ICreateSpecificationDTO };
