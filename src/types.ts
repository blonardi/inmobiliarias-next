export interface FormValues {
  price: number
  title: string
  address: string
  description: string
  dimention: number
  type: string
  location: string
  realEstate: string
  houseImage: File
}

export interface House {
  id: string
  permalink: string
  price: number
  title: string
  date: string
  address: string
  description: string
  houseImage: File
  dimention: number
  type: string
  location: string
  realEstate: string
  lat?: number // latitud, opcional
  lon?: number // longitud, opcional
}

export interface RealEstate {
  _id?: string // MongoDB ObjectId, opcional porque puede no estar presente antes de guardar
  name: string
  address: string
  phone?: string // opcional porque no es required en el schema
  email?: string // opcional porque no es required en el schema
}

export interface GetHousesFilteredResponse {
  houses: House[]
  totalPages: number
  currentPage: number
}

export interface EditFormularioValues
  extends Omit<House, 'id' | 'date' | 'permalink'> {}

export interface EditFormularioProps extends Omit<House, 'id' | 'date'> {}
