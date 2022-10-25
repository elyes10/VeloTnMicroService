import axios from "axios";
const url="http://localhost:8091"
export const DelAssociation = async (id) => {
    try {
    const { data } = await axios.delete(url + "/deleteAssociation/"+id);
    return data;
    } catch (error) {
    console.log(error);
    }
    
};
  export const addAssociation = async (chapitre) => {
    try {
  
    const { data } = await axios.post(
      url + "/addAssociation",
      chapitre
    );

    return data;
  } catch (error) {
    console.log(error);
  }
  
};