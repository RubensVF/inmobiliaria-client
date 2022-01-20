

const baseUrl = "http://localhost:8081/houses";

export const getFavorites = async () => {
  const response = await fetch(`${baseUrl}/get`);
  const responseJson = await response.json();
  return responseJson;
};

export const getById = async (id) => {
  const response = await fetch(`${baseUrl}/${id}`);
  const responseJson = await response.json();
  return responseJson;

}

  
export const getByState = async (state)=>{
  const response = await fetch(`${baseUrl}/state/${state}`);
  const responseJson = await response.json();
  return responseJson;
}

export const getStates = async()=>{
  const response = await fetch(`${baseUrl}/states`);
  const responseJson = await response.json();
  return responseJson;
}