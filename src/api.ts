interface House {
  id: string;
	permalink: string,
  price: string,
  title: string;
  date: string,
  address: string;
  description: string;
  houseImage: string;
	dimention:number,
	type: string,
	location:string,
  realEstate: string
}

const apiHouses = {

	//si tira error, check {houses:[{}]}
	listhouses: async(): Promise<House[]> => {
		const response = await fetch('http://localhost:3001/api/houses')
		const data = await response.json()
		const houses = data.houses
		return houses
	},

	//permalink, parametro,
  fetchHouse: async (permalink: House['permalink']): Promise<House> => {
		const response = await fetch(`http://localhost:3001/api/houses/${permalink}`)
		const house = await response.json()

    if (!house) {
      throw new Error(`House with permalink ${permalink} not found`);
    }

    return house;
  },
};

export default apiHouses;