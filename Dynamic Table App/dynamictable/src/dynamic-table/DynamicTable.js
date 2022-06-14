import { useEffect } from "react";
import TableData from "./TableData";
function DynamicTable(){

    const column = Object.keys(TableData[0]);

    const ThData =()=>{

        return column.map((data)=>{
            return <th keys={data}>{data}</th>
        })
    }

    const tdData =() =>{

        return TableData.map((data)=>{
            return(
                <tr>
                    {
                        column.map((v)=>{
                            return <td>{data[v]}</td>
                        })
                    }
                </tr>
            )
        })
    }

    return(
        <table className="table">
            <thead>
                <tr>{ThData()}</tr>
            </thead>
            <tbody>
                {tdData()}
            </tbody>
        </table>
    )
}
export default DynamicTable