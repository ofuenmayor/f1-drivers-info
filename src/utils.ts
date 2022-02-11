import xml2js from "xml2js";
import { RootObject, DriverResponse, Driver } from "./model/driver";


export async function convertXmlToJSON(xml:string) : Promise<DriverResponse>{
  let response: DriverResponse = new DriverResponse('','','','','');
  xml2js.parseString(xml, (err, result) => {
    if(err) {
        throw err;
    }

    // `result` is a JavaScript object
    // convert it to a JSON string
    const json = JSON.stringify(result, null, 4);
    const obj:RootObject= JSON.parse(json);
    let drivers:Array<Driver> | undefined = [];
    obj.MRData.DriverTable.forEach( dt => drivers = dt.Driver);
    
    const theDriver = drivers[0];
    response = new DriverResponse(theDriver.GivenName[0], theDriver.FamilyName[0], theDriver.PermanentNumber[0], theDriver.DateOfBirth[0], theDriver.Nationality[0]) ;
});
return response;
}
