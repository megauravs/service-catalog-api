import { getRepository } from "typeorm";
import { Service } from "../models";

interface IVersionPayload {
  id: number,
  title: string;
  description: string;
};

export interface IServicePayload {
  title: string;
  description: string;
  versions: Array<IVersionPayload>;
};

export const getServices = async (): Promise<Array<Service>> => {
  const serviceRepository = getRepository(Service);
  return serviceRepository.find({
    skip: 2,
    take: 5
  });
};

export const createService = async (payload: IServicePayload): Promise<Service> => {
  const serviceRepository = getRepository(Service);
  const service = new Service();
  return serviceRepository.save({
    ...service,
    ...payload,
  });
};

export const getService = async (id: number): Promise<Service | null> => {
  const serviceRepository = getRepository(Service);
  const service = await serviceRepository.findOne({ id: id });
  if (!service) return null;
  return service;
};