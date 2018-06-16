import Flexbox from 'flexbox-react';
import * as React from 'react';
import { connect } from 'react-redux';
import { addMessage, removeMessage } from '../redux/action/messageAction';

interface MainScreenPropsType {
  monMessage: string,
  showMessage: (message: string)=>void,
  hideMessage: ()=>void,
}

class MainPage extends React.Component<MainScreenPropsType> {
  constructor(props: any) {
    super(props);
    // this.props.showMessage('message empty');
  }

  render() {
    return (
      <div>
        <Flexbox flexDirection='column'>
          <h1>Main page</h1>
          <p style={{marginRight: '1rem', marginLeft: '1rem'}}>Redux exemple ⤑ {this.props.monMessage} ⤎</p>
          <Flexbox flexDirection='row' >
            <input style={{marginRight: '1rem', marginLeft: '1rem'}} type="button" value="add message" onClick={() => this.props.showMessage('button is pressed')}/>
            <input type="button" value="remove the message" onClick={() => this.props.hideMessage()}/>
          </Flexbox>
        </Flexbox>
      </div>
    );
  }
}

// send action and state to the props of component Home
function mapStateToProps(state: combinedReducerType) {
  return {
    monMessage: state.rootScreenReducer.message,
  }
}
function mapDispatchToProps(dispatch: ActionAvailableToDispatch ) {
  return {
    showMessage: (message: string) => dispatch(addMessage(message)),
    hideMessage: () => dispatch(removeMessage()),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
