const loadCountries=()=>{
    fetch(`https://restcountries.com/v3.1/all`)
    .then(res => res.json())
    .then(data=>displayCountries(data))
}
const displayCountries=(countries)=>{
console.log(countries[0])
// countries.forEach(country => {
//     console.log(country)
// });
const countriesHTML=countries.map(country => getCountryHTML(country))
// console.log(countriesHTML[0])
const container =document.getElementById('countries')
container.innerHTML=countriesHTML.join(' ')
}

const getCountryHTML=({name,flags,capital,region,languages})=>{
  
    return`
     <div class='country'>
       <h2>${name.common}</h2>
       <h2>Continent: ${region}</h2>
       <h3>Capital: ${capital}</h3>
       <p>Language: ${languages? languages.bul : 'There Is No languages' }</p>
       <img src="${flags.png}" alt="">
     </div>
    `
}

//option-2 
// const getCountryHTML=country=>{
//   const {name, flags,area ,capital,startOfWeek }=country
//     return`
//      <div class='country'>
//        <h2>${name.common}</h2>
//        <p>Area: ${area}</p>
//        <h3>Capital: ${capital}</h3>
//        <h3>Start Of Week: ${startOfWeek}</h3>
//        <img src="${flags.png}" alt="">
//      </div>
//     `
// }

// option-1
// const getCountryHTML=country=>{
//     return`
//      <div class='country'>
//        <h2>${country.name.common}</h2>
//        <img src="${country.flags.png}" alt="">
//      </div>
//     `
// }
loadCountries()