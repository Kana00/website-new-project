import Flexbox from 'flexbox-react';
import * as moment from 'moment';
import * as React from 'react';
import { connect } from 'react-redux';
import __ from '../i18n/Language';
import { addMessage, removeMessage } from '../redux/action/messageAction';

interface MainScreenPropsType {
  monMessage: string,
  timeNow: string,
  showMessage: (message: string)=>void,
  hideMessage: ()=>void,
}

class MainPage extends React.Component<MainScreenPropsType, any> {
  public timerID: any;
  constructor(props: MainScreenPropsType) {
    super(props);
    this.state = {
      timeNow: moment().format('LL') + ' ⤑ ' +  moment().format('LTS')
    }
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(),1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      timeNow: moment().format('LL') + ' ⤑ ' +  moment().format('LTS')
    });
  }

  render() {
    return (
      <div>
        <Flexbox flexDirection='column'>
          <h1>Main page</h1>
          <p>Translation string | number ⤑ {__("application.hello")} [{__(1000.443)}] ⤎</p>
          <p>Translation date ⤑ {this.state.timeNow} ⤎</p>
          <p>Redux exemple ⤑ {this.props.monMessage} ⤎</p>
          <Flexbox flexDirection='row' >
            <input style={{marginRight: '1rem'}} type="button" value="add message" onClick={() => this.props.showMessage('button is pressed')}/>
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
