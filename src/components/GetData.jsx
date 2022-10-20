import CreateTable from "./CreateTable"


const GetData = ({ usuarios }) => {
    return (
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
                    usuarios.map((res,index) => (
                        <CreateTable res={res} key={index}/>
                    ))
                }
            </tbody>
        </table>
    )
}

export default GetData