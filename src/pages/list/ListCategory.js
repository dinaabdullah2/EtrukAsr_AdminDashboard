import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import DataCase from "../../components/datatable/DataCase"
const ListCategory = () => {
    return (
        <div className="list">
            <Sidebar />
            <div className="listContainer">
                <Navbar />
                <DataCase />
            </div>
        </div>
    )
}

export default ListCategory