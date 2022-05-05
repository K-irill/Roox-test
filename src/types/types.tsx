export interface IAddress {
  city: string;
  street: string;
  zipcode: string;
}

export interface ICompany {
  name: string;
}

export interface IUsers {
  id: number;
  name: string;
  username: string;
  email: string;
  address: IAddress;
  company: ICompany;
  phone: string;
  website: string;
}

export interface IForm {
  userProps: IUsers;
}
