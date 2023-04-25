function createMarkupCountryInfo(arr) {
  return arr
    .map(
      ({
        name: { official },
        capital,
        population,
        flags: { svg },
        languages,
      }) =>
        `<img class="country-img" src="${svg}" alt="flag ${official}" />
      <h2 class="country-name"><span>${official}</span></h2>
      <p class="country-capital">Capital: <span>${capital}</span></p>
      <p class="country-population">Population: <span>${population}</span></p>
      <p class="country-languages">Languages: <span>${Object.values(
        languages
      ).join(', ')}</span></p>`
    )
    .join('');
}

function createMarkupCountryList(arr) {
  return arr
    .map(
      ({ name: { official }, flags: { svg } }) =>
        `<li class="country-list-item">
        <img src="${svg}" alt="flag ${official}"/>
        <p>${official}</p>
      </li>`
    )
    .join('');
}

export { createMarkupCountryInfo, createMarkupCountryList };
