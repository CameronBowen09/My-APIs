import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key': '7f0744d66bmsh8e9f600c7e6e9fep100676jsnd86597280021' ,
    },
  });
    
  return data;
}