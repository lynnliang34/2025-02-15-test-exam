const { useState, useEffect } = React;

function App() {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const res = await axios.get("https://randomuser.me/api/?results=10");
      setData(res.data.results);
      console.log(res.data.results);
    } catch (error) {
      alert("error");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <div className="row">
        {data.map((person) => (
          <div className="col-md-4" key={person.id.value}>
            <div className="bg-light p-3">
              <img
                src={person.picture.large}
                alt="頭像"
                className="img-fluid rounded-circle"
              />
              <h2 className="mb-0">{`${person.name.first} ${person.name.last}`}</h2>
              <p className="mb-0">{person.email}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
