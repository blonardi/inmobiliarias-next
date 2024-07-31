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
  houseImage: FileList
  dimention: number
  type: string
  location: string
  realEstate: string
  lat?: number // latitud, opcional
  lon?: number // longitud, opcional
}

export interface GetHousesFilteredResponse {
  houses: House[]
  totalPages: number
  currentPage: number
}

export interface EditFormularioValues
  extends Omit<House, 'id' | 'date' | 'permalink'> {}

export interface EditFormularioProps extends Omit<House, 'id' | 'date'> {}
