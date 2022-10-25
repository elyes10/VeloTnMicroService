import React, {useState} from 'react';
import {useHistory} from "use-history";

function VeloForm() {
    const history = useHistory();

    const [name, setName] = useState("");
    const [stock, setStock] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("bike2.JPG");
    function addSalary() {
        let data = {name,description,stock,price,image}
        fetch("http://localhost:8080/addvelo", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)

        }).then((resp)=>{

        })

    }
    return (
        <div>

            <h2 style={{textAlign: "center", color: "#1e90ff"}}>ADD VELO</h2>




            <div>
                <label htmlFor="exampleInputPassword1">Name</label>
                <input type="text" className="form-control" placeholder=" NAME" name="name" value={name}
                       onChange={(e) => {
                           setName(e.target.value)
                       }}/>
            </div>

            <div>
                <label htmlFor="exampleInputPasswordd">Description</label>
                <input type="text" className="form-control" placeholder=" Description" name="description" value={description}
                       onChange={(e) => {
                           setDescription(e.target.value)
                       }}/>
            </div>
            <div>
                <label htmlFor="exampleInputPasswords">Stock</label>
                <input type="number" className="form-control" placeholder="stock" name="stock" value={stock}
                       onChange={(e) => {
                           setStock(e.target.value)
                       }}/>
            </div>
            <div>
                <label htmlFor="exampleInputPasswordsre">Stock</label>
                <input type="number" className="form-control" placeholder="price" name="stock" value={price}
                       onChange={(e) => {
                           setPrice(e.target.value)
                       }}/>
            </div>
          <a href="/velosback"> <button type="button" className="btn btn-primary"
                    style={{marginTop: "10px", marginLeft: "200px", width: "180px"}} onClick={() => {addSalary()}}>save
            </button></a>
        </div>
    );
}

export default VeloForm;