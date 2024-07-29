export interface Contact {
  id: string;
  first_name: string;
  last_name: string;
  avatar_url: string;
  company: string;
  details: string;
  email: string;
  phone: Phone;
  addresses: AddressInterface[];
}

export interface Phone {
  area_code: string;
  number: string;
}

export interface AddressInterface {
  line_1: string;
  line_2: string;
  zip_code: string;
  city_id: string;
  state_id: string;
}
