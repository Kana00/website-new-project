import * as React from 'react';
import * as style from './TitlePresentation.css';

export default class TitlePrenstation extends React.Component {
  render() {
    return (
      <div className={style.headerDemo}>
        <span className={style.title}>website-new-project</span>
      </div>
    );
  }
}
