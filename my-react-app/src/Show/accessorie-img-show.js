export const getAccessorieImgUrl=(name)=>{
return new URL(`../assets/accessories/${name}`, import.meta.url).href
}  