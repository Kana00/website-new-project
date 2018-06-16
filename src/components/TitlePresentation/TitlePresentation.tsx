import Flexbox from 'flexbox-react';
import * as React from 'react';
import { LinkIn } from '../InjectionComponent/InjectionComponent';
import * as style from './TitlePresentation.css';

export default class TitlePrenstation extends React.Component {
  render() {
    return (
      <div className={style.headerDemo}>
        <Flexbox alignItems='center'>
          <div className={style.title}><span>website-new-project</span></div>
          <LinkIn className={style.link} to="/">main page</LinkIn>
          <LinkIn className={style.link} to="/SecondPage">second page</LinkIn>
        </Flexbox>
      </div>
    );
  }
}
