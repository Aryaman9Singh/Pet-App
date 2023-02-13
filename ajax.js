const apiHost = 'https://dog.ceo/dog-api/'
export default{
    async fetchDogs(){
        try {
            const response = await fetch(
              apiHost + '/api/breeds/image/random'
            );
            const json = await response.json();
            return json;
          } catch (error) {
            console.error(error);
          }
    }
}