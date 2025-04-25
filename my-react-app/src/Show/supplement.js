export const getSupplementImgUrl=(name)=>{
  return new URL(`../assets/Supplements/${name}`, import.meta.url).href
  } 