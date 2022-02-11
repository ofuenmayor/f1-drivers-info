/* export interface Driver{ */
/*   PermanentNumber: number, */
/*   GivenName: string, */
/*   FamilyName: string, */
/*   DateOfBirth: string, */
/*   Nationality: string */
/* } */
/*  */
/* interface ${ */
/*   xmlns: string, */
/*   series: string, */
/*   url: string, */
/*   limit: string, */
/*   offset: string, */
/*   total: string */
/* } */
/*  */
/* interface driverId{ */
/*   driverId: string */
/* } */
/*  */
/* export interface DriverTable{ */
/*   $: driverId, */
/*   Driver: Driver */
/* } */
/*  */
/* export interface f1ApiResponse{ */
/*   MRData: { */
/*     DriverTable: DriverTable[], */
/*     $:$ */
/*   } */
/* } */

    export interface metadata {
        xmlns: string;
        series: string;
        url: string;
        limit: string;
        offset: string;
        total: string;
    }

    export interface driverId {
        driverId: string;
    }

    export interface interalDriverMetadata {
        driverId: string;
        code: string;
        url: string;
    }

    export interface Driver {
        $: interalDriverMetadata;
        PermanentNumber: string[];
        GivenName: string[];
        FamilyName: string[];
        DateOfBirth: string[];
        Nationality: string[];
    }

    export class DriverResponse {
	public driverId: string;
	public permanentNumber: string;
        public name: string;
        public lastname: string;
        public dateOfBirth: string;
        public nationality: string;

      constructor(givenName: string, familyName: string, permanentNumber: string, dateOfBirth: string, nationality: string){
	this.driverId = familyName;
	this.name = `${givenName} ${familyName}`;
	this.lastname = familyName;
	this.permanentNumber = permanentNumber;
	this.dateOfBirth = dateOfBirth;
	this.nationality = nationality;
      }
    }


    export interface DriverTable {
        $: driverId;
        Driver: Driver[];
    }

    export interface MRData {
        $: metadata ;
        DriverTable: DriverTable[];
    }

    export interface RootObject {
        MRData: MRData;
    }
