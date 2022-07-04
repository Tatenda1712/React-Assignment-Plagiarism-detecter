
export default function LecturerMain(){
    return(
        <div>
              <section id="body-section">
            <div className="container text-center mt-5">
                <h5 className="text-primary">15 / 20 Students submitted their assignments</h5>
                <button className="btn btn-danger my-4">Check Assignment Plagiarism</button>
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
                            <td><span className="text-success">Submitted</span></td>
                          </tr>
                          <tr>
                            <td>Tindo Musodza</td>
                            <td>B1850366</td>
                            <td><span className="text-danger">Not Submitted</span></td>
                          </tr>
                          <tr>
                            <td>Tatenda Musodza</td>
                            <td>B1850366</td>
                            <td><span className="text-success">Submitted</span></td>
                          </tr>
                        </tbody>
                      </table>
                  </div>
            </div>
        </section>
        </div>
    )
}