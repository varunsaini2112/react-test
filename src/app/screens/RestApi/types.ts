interface GeoLocation {
  lat: string;
  lng: string;
}

interface EmployeeAddress {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: GeoLocation;
}

interface EmployeeCompany {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface Employee {
  id: number;
  name: string;
  username: string;
  email: string;
  address: EmployeeAddress;
  phone: string;
  website: string;
  company: EmployeeCompany;
}
