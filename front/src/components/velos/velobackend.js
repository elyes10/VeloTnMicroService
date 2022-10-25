import React, {useEffect, useState} from 'react';
import background from "../../assets/gradienta-OzfD79w8ptA-unsplash.jpg";

import {useHistory} from "use-history";
import {Button} from "@mui/material";
import delimg from "../../assets/bin-delete.png";
import bg from "../../assets/bgequip.jpg";
import useNavigate from "react-use-navigate";

function Velobackend() {
    const [overtime, setAdditions] = useState([])
    const navigate = useNavigate();
    const history = useHistory();

    function refresh() {
        const url = 'http://localhost:8080/velos';//api url
        fetch(url).then(resp => resp.json())//calling url by method GET
            .then(resp => setAdditions(resp))//setting response to state overtime
    }
    useEffect(()=>{refresh();refresh()},[]);

    function Delete(id) {
        fetch(`http://localhost:8080/deleteVelo/${id}`,
            {
                method: 'DELETE'
            }).then((result) => {
            result.json().then((resp) => {
                console.warn(resp)
            })
        })
    }
    return (
        <main style={{backgroundImage: `url(${background})`, height: "100%",
            position: "absolute",
            left: "0",
            width: "100%",
            overflow: "hidden"}}>

            <div className="main__container" >
<br/>
                <h1   style={{color: "#ffffff",fontSize:"25px"}}><strong style={{color: "#ffffff",fontSize:"30px"}}>Dashboard /</strong> Bikes</h1>
                <br/><br/><br/><br/><br/><br/>

                <div className="tab-content">


                    <div className="tab-pane show active" >

                        <br/>
                        <div className="text-right mb-4 clearfix">
                          <a href="/Add_velo">  <button className="btn btn-light add-btn" type="button"><i className="fa fa-plus"></i> Add bike
                            </button> </a>
                        </div>



                        <div className="payroll-table card" >
                            <div className="table-responsive">
                                <table className="table table-hover table-radius">
                                    <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Name</th>
                                        <th>Description</th>
                                        <th>Stock</th>
                                        <th>Price</th>


                                        <th className="text-right">Action</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {overtime.map((item)=>
                                        <tr>
                                            <th>{item.id}</th>
                                            <td>{item.name}</td>
                                            <td>{item.description}</td>
                                            <td>{item.stock}</td>
                                            <td>{item.price}</td>
                                            <td className="text-right">
                                                <Button
                                                    style={{
                                                        backgroundPosition: 'center',
                                                        backgroundSize: 'cover',
                                                        backgroundRepeat: 'no-repeat',
                                                        backgroundImage: `url(${delimg})`,
                                                        border: "none",
                                                        outline: "none",
                                                        height: "40px",


                                                    }}
                                                    onClick={() => {
                                                        Delete(item.id);
                                                        refresh();
                                                          refresh();

                                                    }
                                                    }
                                                >

                                                </Button>
                                            </td>
                                        </tr>
                                    )}



                                    </tbody>
                                </table>
                            </div>
                        </div>


                    </div>


                </div>

            </div>

        </main>
    );
}

export default Velobackend;