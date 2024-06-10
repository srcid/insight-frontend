import api from "./api";

function service() {
  async function getCities() {
    return await api.get("/cidades")
  }

  async function getCityPopulation(id) {
    return await api.get(`/populacao/${id}`)
  }

  async function getCityGDP(id) {
    return await api.get(`/pib/${id}`)
  }

  async function getCityLiteracy(id) {
    return await api.get(`/alfabetizacao/${id}`)
  }

  return {
    getCities,
    getCityPopulation,
    getCityGDP,
    getCityLiteracy,
  };
}

export const InsightPythonService = service();