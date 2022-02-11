import { gql } from "apollo-server";
import { DriverApi } from "./dataset";

export const typeDefs = gql`
type Driver @key(fields:"lastname"){
  driverId: String
  name: String
  lastname: String
  permanentNumber: Int 
  nationality: String
  dateOfBirth: String
}

type Query{
  Drivers: [Driver]
  getDriver: Driver
}
`;

export function getDriverByLastname(){
  const driverApi = DriverApi.getInstance();
  console.log('test');
  return driverApi.getDriverByLastname('norris');
}

export const drivers = [
  {
    name: 'Lando Norris',
    permanentNumber: 4,
    nationality: 'British',
    dateOfBirth: '1999-11-13'
  }
];

