export const createHouse = (e) => {
  const form = e.target
  // console.log(form)
  const newFormHouse = {
    price: form.housePrice.value,
    title: form.houseTitle.value,
    address: form.houseAddress.value,
    description: form.houseDescription.value,
    dimention: form.houseDimention.value,
    type: form.houseType.value,
    location: form.houseLocation.value,
    realEstate: form.houseRealEstate.value,
    houseImage: form.houseImage.value
  }

  return newFormHouse
}
