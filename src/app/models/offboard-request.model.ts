export interface OffboardRequest {
  receiver: string;
  email: string;
  phone: string;
  street: string;
  postalCode: string;
  city: string;
  country: string;
  notes: string;
}

export interface Address {
  streetLine: string;
  country: string;
  postalCode: string;
  receiver: string;
}

export interface OffboardRequestDto {
  address: Address;
  notes: string;
  phone: string;
  email: string;
}
