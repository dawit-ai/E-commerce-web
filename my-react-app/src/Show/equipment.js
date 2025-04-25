export const getEquipmentImgUrl=(name)=>{
  return new URL(`../assets/Equipment/${name}`, import.meta.url).href
  } 