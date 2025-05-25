import { useEffect, useState } from "react";
import CreateTable from "./CreateTable";
import axios from 'axios';
import _ from "lodash";

const pageSize = 2;
const GetData = () => {

    const [usuarios, setUsuarios] = useState([''])
    // const url1 = 'https://reqres.in/api/users?page=2'
    const url2 = 'info.txt'
     axios('https://reqres.in/api/users?page=2',{headers: {"x-api-key": "reqres-free-v1"}})
            .then( (res) => {
                const response = res.data.data
                setUsuarios(response)
            });
    const [paginatePosts, setPaginatePosts] = useState();
    const [currentPage, setCurrentPage] = useState(0);
   
    useEffect(() => {
        setPaginatePosts(_(usuarios).slice(0).take(pageSize).value());
        
    }, []);

    const pageCount = usuarios ? Math.ceil(usuarios.length / pageSize) : 0;

    if (pageCount === 1) return null;
    const pages = _.range(0, pageCount  -1)

    let num ; 
    let startIndex;
    const pagination = (pageNo) => {
        if (pageNo == 1)  startIndex = (1) * pageCount;
        else if (pageNo == 2)  startIndex = (4) * pageCount;;
        setCurrentPage(pageNo)
        console.log(pageCount)
        const paginatePosts = _(usuarios).slice(startIndex).take(pageSize+1).value();
        setPaginatePosts(paginatePosts)
    }
    return (
        <>
            <table className="tablaUsuarios">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Correo</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        paginatePosts.map((res, index) => (
                            <CreateTable res={res} key={index} />
                        ))
                    }
                </tbody>
            </table>
            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    {
                        pages.map((page, index) => (
                            <li className={
                                page === currentPage ? "page-item active" : "page-item"
                            } key={index}
                            >
                                <p className="page-link"
                                    onClick={() => pagination(index)}
                                >
                                    {page}
                                </p>
                            </li>
                        ))
                    }
                </ul>
            </nav>
        </>
    )
}

export default GetData
