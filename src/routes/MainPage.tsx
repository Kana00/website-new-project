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
    this.props.showMessage('message empty');
  }

  render() {
    return (
      <Flexbox flexDirection='column' justifyContent='center' alignItems='center'>
        <Flexbox flexDirection='column' justifyContent='center' alignItems='center'>
          <h1>Features</h1>
          <p>Redux exemple ⤑ {this.props.monMessage} ⤎</p>
          <Flexbox flexDirection='row' justifyContent='space-around'>
            <input type="button" value="add message" onClick={() => this.props.showMessage('button is pressed')}/>
            <input type="button" value="remove the message" onClick={() => this.props.hideMessage()}/>
          </Flexbox>
        </Flexbox>
      </Flexbox>
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
