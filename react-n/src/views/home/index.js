import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../../router.js';
import './index.css';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      searchVal: ''
    };
  }
  search(e) {
    this.setState({ searchVal: e.target.value });
  }
  render() {
    const meun = routes.filter((r) => {
      if (r.key === 'home') {
        return false;
      } else {
        if (this.state.searchVal) {
          return r.title.indexOf(this.state.searchVal) > -1;
        } else {
          return true;
        }
      }
    });
    return (
      <div className='page'>
        <div className='search-box'>
          <input className='search-input' placeholder='请输入' onChange={this.search.bind(this)}></input>
        </div>
        <div className='meun-box'>
          {meun.map((m) => {
            return (
              <Link className='meun-item' to={m.path} key={m.key}>
                {m.title}
              </Link>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Home;
