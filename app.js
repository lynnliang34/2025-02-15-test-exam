function App() {
  return (
    <div className="container mx-auto p-4">
      <div class="row">
        <div class="col-md-4">
          <div class="bg-light p-3">
            <img
              src="https://randomuser.me/api/portraits/women/61.jpg"
              alt="頭像"
              class="img-fluid rounded-circle"
            />
            <h2 class="mb-0">Mona Heen</h2>
            <p class="mb-0">mona.heen@example.com</p>
          </div>
        </div>
        <div class="col-md-4">
          <div class="bg-light p-3">
            <img
              src="https://randomuser.me/api/portraits/women/10.jpg"
              alt="頭像"
              class="img-fluid rounded-circle"
            />
            <h2 class="mb-0">Susan Craig</h2>
            <p class="mb-0">susan.craig@example.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
