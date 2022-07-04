import "./adminmain.css"
import Students from '../Students/Students'
export default function AdminMain(){
    return(
        <div>
             <section id="body-section">
            <div className="container text-center mt-5">
                <h2 className="mt-3 m1-0 admintitle">REGISTERED STUDENTS</h2>
                <div className="table-responsive">
                    <table className="table table-light table-hover table-striped ">
                        <thead className="thead-dark">
                          <tr className="table-dark">
                            <th>Student Name</th>
                            <th>Registration Number</th>
                            <th>Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Tatenda Musodza</td>
                            <td>B1850366</td>
                            <td><span ><a href="#edit"class="text-success admin-edit">Edit</a></span> <span className="text-dark">|</span> <span><a href="#delete" className="text-danger admin-delete">Delete</a></span></td>
                          </tr>
                          <tr>
                            <td>Tindo Musodza</td>
                            <td>B1850366</td>
                            <td><span ><a href="#edit"class="text-success admin-edit">Edit</a></span> <span className="text-dark">|</span> <span><a href="#delete" className="text-danger admin-delete">Delete</a></span></td>
                          </tr>
                          <tr>
                            <td>Tatenda Musodza</td>
                            <td>B1850366</td>
                            <td><span ><a href="#edit"class="text-success admin-edit">Edit</a></span> <span className="text-dark">|</span> <span><a href="#delete" className="text-danger admin-delete">Delete</a></span></td>
                          </tr>
                        </tbody>
                      </table>
                  </div>
            </div>
        </section>
        </div>

    )
}