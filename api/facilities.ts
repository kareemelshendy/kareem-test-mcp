import { Facility } from "@/models";
import facilitiesData from "../data/facilities.json";


export const getFacilities = async (): Promise<Facility[]> => {
  return facilitiesData.facilities as Facility[];
};

export const getFacilityById = async (id: number): Promise<Facility | undefined> => {
  return (facilitiesData.facilities as Facility[]).find((facility) => facility.id === id);
};