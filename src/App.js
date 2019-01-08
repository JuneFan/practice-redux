import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getList,removeFromFirstList, removeFromSecondList } from './actions/action';
import './App.css';
import { bindActionCreators } from 'redux';

class Counter extends Component {

  componentDidMount() {
    this.props.getList();
  }
  render() {
    return (
      <div className="list">
      <ul className="firstList">
      {console.log("this.props,-----------------", this.props)}
        {
          this.props.firstList.map((ele,ind)=> {
            return <li key={`first${ind}`} onClick={() => this.props.removeFromFirstList(ind)}>{ele}</li>}
          )
        }
      </ul>
      <ul className="secondList">
        {
          this.props.secondList.map((ele,index)=> 
            <li key={`second${index}`} onClick={() => this.props.removeFromSecondList(index)}>{ele}</li>
          )
        }
      </ul>


      </div>

    );
  }
}

function mapStateToProps(state) {
  return {
    firstList: state.firstList,
    secondList: state.secondList
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getList,removeFromFirstList, removeFromSecondList }, dispatch);
  // {
  //   getAll: ()=> {
  //     dispatch(getList())
  //   },
  //   removeFromFirstList: (id)=> {
  //     dispatch(removeFromFirstList(id))
  //   },
  //   removeFromSecondList: (id)=> {
  //     dispatch(removeFromSecondList(id))
  //   }
  // }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
