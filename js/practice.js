const countryDataLoad=()=>{
    fetch(`https://restcountries.com/v3.1/all`)
    .then(res=>res.json())
    .then(data =>displayCountries(data))
}
const displayCountries=(countries)=>{
    // console.log(countries)
    const countriesHTML=countries.map(country => allCountryHTML(country))
    const container=document.getElementById('countries')
    container.innerHTML=countriesHTML.join(' ')
}
const allCountryHTML=country=>{
   return `
    <div class='country'>
     <h2>Country Name: ${country.name.common}</h2>
     <h3>Capital: ${country?.capital}</h3>
     <h3>Continents: ${country.continents ? country.continents : 'There is no coninents'}</h3>
     <img src="${country.flags.png}" alt="">
     
    </div>

   `
}
countryDataLoad()