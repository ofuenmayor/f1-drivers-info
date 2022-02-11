import {drivers,getDriverByLastname} from './schema'

export const resolvers = {
  Query: {
    Drivers: () => drivers,
    getDriver: () => getDriverByLastname(),
},
    Driver:{
      __resolveReference(Driver:any, {getDriverByLastname}:any){
	return getDriverByLastname(Driver.lastname)
      }
    }
};
