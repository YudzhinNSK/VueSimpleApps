export type Author = {
  id: string,
  name: string,
  username: string,
  phone: string,
  website: string,
  address: Address,
  company: Company
}

type Address = {
  street: string,
  suite: string,
  city: string,
  zipcode: string,
  geo: Geoposition
}

type Geoposition = {
  lat: string,
  lng: string
}

type Company = {
  name: string,
  catchPhrase: string,
  bs: string
}