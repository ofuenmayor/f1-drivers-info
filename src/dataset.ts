import axios from "axios";
import { Driver, DriverResponse } from "./model/driver";
import { convertXmlToJSON } from "./utils";

const baseUrl = 'https://ergast.com/api/f1/drivers/';

export class DriverApi{
  private static instance: DriverApi;

  private constructor(){}

  public static getInstance(): DriverApi{
    if(!DriverApi.instance){
      DriverApi.instance = new DriverApi();
    }

    return DriverApi.instance;
  }

  public async getDriverByLastname(lastname:string) : Promise<DriverResponse>{
    const apiResponse = await axios.get(`${baseUrl+lastname}`);
    const driver: DriverResponse = await convertXmlToJSON(apiResponse.data);
    return driver;
    
}
}
