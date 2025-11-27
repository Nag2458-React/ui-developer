function Props({ users }) {
  return (
    <div className="container">
      <h4 className="text-center">Props Page</h4>
      <hr />
      <div className="row">
        {users.map((u) => (
          <div className="col-md-4">
            <div className="card">
              <div className="card-header" style={{ backgroundColor: u.cbg }}>
                <h6>{u.name}</h6>
              </div>
              <div className="card-body">
                <p>{u.role}</p>
                <br />
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {u.skills.map((skill, i) => (
                    <span
                      key={i}
                      style={{
                        border: "1px solid #333",
                        padding: "3px 8px",
                        borderRadius: "8px",
                        fontSize: "14px",
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="card-footer">
                <button
                  style={{
                    backgroundColor: u.bg,
                    color: "white",
                    borderRadius: "10px",
                  }}
                >
                  Click Here
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Props;
