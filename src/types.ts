export interface FormValues {
  price: number
  title: string
  address: string
  description: string
  dimention: number
  type: string
  location: string
  realEstate: string
  houseImage: string
}

export interface House {
  id: string
  permalink: string
  price: number
  title: string
  date: string
  address: string
  description: string
  houseImage: string
  dimention: number
  type: string
  location: string
  realEstate: string
}

export interface EditFormularioValues extends Omit<House, 'id' | 'date' | 'permalink'> {}

export interface EditFormularioProps extends Omit<House, 'id' | 'date'> {}