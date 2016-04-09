import React from 'react';
import { Link } from 'react-router';

class App extends React.Component {
  componentDidMount() {
    document.body.className='';
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1>React Catalog Tools</h1>
            <nav>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/work">Work</Link></li>
                <li><Link to="/contact">Contact</Link></li>
             </ul>
           </nav>
           { this.props.children }
          </div>
        </div>
     </div>
    )
  }
}

export default App;
