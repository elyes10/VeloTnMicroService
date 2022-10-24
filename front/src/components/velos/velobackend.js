import React, {useEffect, useState} from 'react';
import background from "../../assets/workspace3.png";


import {Link, useHistory} from "react-router-dom";
import {Button} from "@mui/material";
import delimg from "../../assets/bin-delete.png";
function Velobackend() {
    const [overtime, setAdditions] = useState([])
    const history = useHistory();
    function refresh() {
        const url = '/holidays/show';//api url
        fetch(url).then(resp => resp.json())//calling url by method GET
            .then(resp => setAdditions(resp))//setting response to state overtime
    }
    useEffect(()=>{refresh();refresh()},[]);

    function Delete(id) {
        fetch(`/holidays/delete/${id}`,
            {
                method: 'DELETE'
            }).then((result) => {
            result.json().then((resp) => {
                console.warn(resp)
            })
        })
    }
    return (
        <main style={{ backgroundImage: `url(${background})`}}>

            <div className="main__container" >

                <h1   style={{color: "#1e90ff",fontSize:"25px"}}><strong style={{color: "#1e90ff",fontSize:"30px"}}>Dashboard /</strong> Holidays</h1>
                <br/><br/><br/><br/><br/><br/>

                <div className="tab-content">


                    <div className="tab-pane show active" >

                        <br/>
                        <div className="text-right mb-4 clearfix">
                            <button className="btn btn-primary add-btn" type="button" onClick={()=>history.push('/add_holiday')}><i className="fa fa-plus"></i> Add Holiday
                            </button>
                        </div>



                        <div className="payroll-table card">
                            <div className="table-responsive">
                                <table className="table table-hover table-radius">
                                    <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Date</th>

                                        <th className="text-right">Action</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {overtime.map((item)=>
                                        <tr>
                                            <th>{item.holidayName}</th>
                                            <td>{item.holidayDate.slice(0,10)}</td>

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
                                                        Delete(item._id);
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