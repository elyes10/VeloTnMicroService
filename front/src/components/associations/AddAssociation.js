import React, { useEffect, useState } from 'react'
import {Link} from "react-router-dom";
import {useHistory} from "use-history";
import {DelAssociation,addAssociation} from "./AssociationApi";
import Logo from "../../assets/logott.png";

function AddAssociation() {

    const [equipments, setEquipments] = useState([])
    const history = useHistory();
    const [filter, setFilter] = useState("");
    const [ass, setAss] = useState({
        name: "",
        email: "",
        address:"",
        numero:"",
      });

      const PushCh=async(e)=>{
        e.preventDefault();
        try {
    const resultadd= await addAssociation(ass) 

          }
          catch (error) {
            console.log(error);
          }
          refresh();
      }
    
    function refresh() {
        const url = 'http://localhost:8091/Associations';
        fetch(url).then(resp => resp.json())//calling url by method GET
            .then(resp => setEquipments(resp))//setting response to state overtime
            .catch(e => console.log('There is an issue with getting the information' , e))
    }

    const onDelete=async(event,id)=>{
        event.preventDefault();
        try {
    const resultadd= await DelAssociation(id) }
          catch (error) {
            console.log(error);
          }
          
          refresh();
      }



    useEffect(()=>{refresh()},[]);
    return (
        
    <section class="event_section layout_padding">
      
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></link>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
    

            <br/>
            <br/>
  <div>
    <h3>List of Associations</h3>
  <table class="table table-striped table-responsive-md">
<thead>
  <tr>
    <th scope="col">#</th>
    <th scope="col">IdAssociation</th>
    <th scope="col">Name</th>
    <th scope="col">email</th>
    <th scope="col">numero</th>
    <th scope="col">address</th>
  </tr>
</thead>
<tbody>
{equipments.map((domain,index)=>(
<tr>
    <th scope="row">{index}</th>
    <td class="text-info" >{domain.idAssociation}</td>
    <td class="text-info">{domain.email}</td>
    <td class="text-info">{domain.numero}</td>
    <td class="text-info">{domain.address}</td>
    
<button name="add" className='btn btn-info '  onClick={(event)=>onDelete(event,domain.idAssociation)}><i class="fa fa-trash"></i> </button>
</tr>
))}
</tbody>
</table>
<form class="form-group " >
            <h3>Add Association</h3>
            <input type="text"  name="name" placeholder='Name'
            onChange={(e) =>
                setAss({ ...ass, name: e.target.value })}/>
                <br/>
            <input type="text"  name="email" placeholder='Email'
            onChange={(e) =>
                setAss({ ...ass, email: e.target.value })}/>
                <br/>
          
          <input type="text"  name="numero" placeholder='Numero'
     onChange={(e) =>
        setAss({ ...ass, numero: e.target.value })}/> 
         <br/>          
         <input type="text"  name="address" placeholder='Address'
    onChange={(e) =>
        setAss({ ...ass, address: e.target.value })}/>
                
            <br/>
            <div class="d-flex justify-content-center">
            <button name="add" className="btn btn-info  " onClick={(ev)=>PushCh(ev)}>Add</button>
            </div>
        </form>
</div>
</section>

);

}
export default AddAssociation;