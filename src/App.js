import React from 'react';
import CurrentTime from './components/CurrentTime';

const App = () => {
  return (
    <div className="container-fluid">
    <div className="row d-flex justify-content-center align-middle">
      <div className="card">
        <div className="card-body">
          <h5 class="card-title">Hora Actual</h5>
          <div className="card-body">
            <CurrentTime />
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default App;
