import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from './actions/actionCreator.js';

import Main from './components/main.js';



function mapStateToProps(state) {
  return {
    posts: state.posts,
    comments: state.comments
  }
}
export function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}
const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;
