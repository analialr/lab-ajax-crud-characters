class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
    this.axiosApp = axios.create({ baseURL: this.BASE_URL });
  }

  getFullList = () => this.axiosApp.get("/characters")

  getOneRegister = (id) => this.axiosApp.get(`/characters/${id}`)

  createOneRegister = (info) => this.axiosApp.post("/character", info)

  updateOneRegister = (id, info) => this.axiosApp.put(`/characters/${id}`, info)

  deleteOneRegister = (id) => this.axiosApp.delete(`/characters/${id}`)
}
