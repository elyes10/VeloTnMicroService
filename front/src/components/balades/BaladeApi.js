import axios from "axios";
const url="http://localhost:8096"

export const DelBalade = async (id) => {
    try {
    const { data } = await axios.delete(url + "/deleteBalade/"+id);
    return data;
    } catch (error) {
    console.log(error);
    }
    
};
  export const addBalad = async (chapitre) => {
    try {
  
    const { data } = await axios.post(
      url + "/addBalade",
      chapitre
    );

    return data;
  } catch (error) {
    console.log(error);
  }
  
};