class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
    this.api = axios.create({baseURL: this.BASE_URL})
  }

  async getFullList() {
        try {
          const response = await this.api.get(`/characters`);
         const allitems = response.data;
         return allitems
        } catch (errors) {
          console.error(errors);
        }
  }

  async getOneRegister(id) {
    try{
   const response = await this.api.get(`/characters/${id}`)
   const allitems = response.data;
   return allitems
    }catch (errors) {
          console.error("Error while getting by on4", errors);
    }
  }

  async createOneRegister (item) {
    try {
    const response = await this.api.post(`/characters`, item);
    }catch (errors) {
          console.error(errors);
    }
  }

  async updateOneRegister (item) {
    try{
     await this.api.put(`/characters/${item.id}`, item);
    }catch (errors) {
          console.error(errors);
    }

  }

  async deleteOneRegister (item) {
    try{
  await this.api.delete(`/characters/${item}`);
    }catch (errors) {
          console.error(errors);
    }

  }
}
