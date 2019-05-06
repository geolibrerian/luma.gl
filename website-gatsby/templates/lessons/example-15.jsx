import React from 'react';
import AnimationLoopRunner from '../../src/components/animation-loop-runner';
import AnimationLoop from '../../../examples/lessons/15/app';

const PATH = 'examples/lessons/15';

export default class Example extends React.Component {
  render() {
    return (
      <AnimationLoopRunner AnimationLoop={AnimationLoop} path={PATH}/>
    );
  }
}
