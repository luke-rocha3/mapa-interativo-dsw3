document.addEventListener("DOMContentLoaded", () => {
  const svgObject = document.getElementById("map");
  const countryInfoElements = {
    name: document.getElementById("name"),
    capital: document.getElementById("capital"),
    currency: document.getElementById("currency"),
    continent: document.getElementById("continent"),
    flag: document.getElementById("flag"),
  };

  const updateCountryInfo = (countryData) => {
    countryInfoElements.name.textContent = countryData.name.common;
    countryInfoElements.capital.textContent = countryData.capital?.[0] || "Desconhecida";
    countryInfoElements.currency.textContent = countryData.currencies
      ? Object.values(countryData.currencies)[0]?.name
      : "Desconhecida";
    countryInfoElements.continent.textContent = countryData.continents?.[0] || "Desconhecido";
    countryInfoElements.flag.src = countryData.flags?.svg || "";
    countryInfoElements.flag.alt = `Bandeira de ${countryData.name.common}`;
  };

  const handleError = (elementId, message) => {
    console.error(message);
    const element = document.getElementById(elementId);
    if (element) {
      element.outerHTML = `<p>${message}</p>`;
    }
  };

  svgObject.addEventListener("load", () => {
    const svgDoc = svgObject.contentDocument;
    if (!svgDoc) {
      handleError("map", "Não foi possível carregar o conteúdo do SVG.");
      return;
    }
    const countries = svgDoc.querySelectorAll("path");

    countries.forEach((country) => {
      const originalFill = country.style.fill;

      country.addEventListener("mouseenter", async () => {
        country.style.fill = "orange";
        const countryCode = country.id;

        if (countryCode) {
          try {
            const response = await fetch(`https://restcountries.com/v3.1/alpha/${countryCode}`);
            if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            const countryData = Array.isArray(data) ? data[0] : data;
            updateCountryInfo(countryData);
          } catch (error) {
            console.error("Erro ao buscar dados do país:", error);
            Object.values(countryInfoElements).forEach(el => el.textContent = "Erro ao carregar dados.");
            countryInfoElements.flag.src = "";
          }
        }
      });

      country.addEventListener("mouseleave", () => {
        country.style.fill = originalFill;
      });
    });
  });

  svgObject.addEventListener("error", () => {
    handleError("map", "Erro ao carregar o arquivo SVG do mapa.");
  });
});
