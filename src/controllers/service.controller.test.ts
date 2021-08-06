import ServiceController from "./service.controller";
import * as ServiceRepository from "../repositories/service";

describe("ServiceController", () => {
  describe("getServices", () => {

    test("should return empty array", async () => {
      const spy = jest
        .spyOn(ServiceRepository, "getServices")
        .mockResolvedValueOnce([]);
      const controller = new ServiceController();
      const services = await controller.getServices();
      expect(services).toEqual([]);
      expect(spy).toHaveBeenCalledWith();
      expect(spy).toHaveBeenCalledTimes(1);
      spy.mockRestore();
    });

    test("should return service list", async () => {
      const servicesList = [
        {
          id: 1,
          title: "Sample Service",
          description: "Sample",
          versions: [{
            id: 1,
            title: "Sample Version",
            description: "Sample",
          }],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ];
      const spy = jest
        .spyOn(ServiceRepository, "getServices")
        .mockResolvedValueOnce([{
          id: 1,
          title: "Sample Service",
          description: "Sample",
          versions: [{
            id: 1,
            title: "Sample Version",
            description: "Sample",
          }],
          createdAt: new Date(),
          updatedAt: new Date(),
        }]);
      const controller = new ServiceController();
      const services = await controller.getServices();
      expect(services).toEqual(servicesList);
      expect(spy).toHaveBeenCalledWith();
      expect(spy).toHaveBeenCalledTimes(1);
      spy.mockRestore();
    });
  });
});