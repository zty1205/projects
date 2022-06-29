import React from 'react';
import './index.css';

class MReactEvent extends React.Component {
  clickOuter(e) {
    console.log('clickOuter = ', e);
  }
  clickMiddle(e) {
    console.log('clickMiddle = ', e);
  }
  clickInner(e) {
    console.log('clickInner = ', e, e.isPropagationStopped());
    e.stopPropagation();
    // e.nativeEvent.stopPropagation();
    // e.nativeEvent.stopImmediatePropagation();
  }
  render() {
    return (
      <div className='page'>
        <div className='outer-box' onClick={this.clickOuter}>
          outer
          <div className='middle-box' onClickCapture={this.clickMiddle}>
            middle 捕获
            <div className='inner-box' onClick={this.clickInner}>
              inner 阻止冒泡
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MReactEvent;
