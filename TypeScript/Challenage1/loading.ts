{
  /**
   * Print Loading State
   */
  type LoadingState = {
    state: 'loading';
  };

  type SuccessState = {
    state: 'success';
    response: {
      body: string;
    };
  };

  type FailState = {
    state: 'fail';
    reason: string;
  };

  type ResourceLoadState = LoadingState | SuccessState | FailState;

  function printLoginState2 (state : ResourceLoadState) {
    if (state.state == 'loading')
      console.log('👀 loading...');
    else if (state.state == 'success')
      console.log('😃 loading...');
    else if (state.state == 'fail')
      console.log('😱 no network');
    return 'error';
  }

  printLoginState2({ state: 'loading' }); // 👀 loading...
  printLoginState2({ state: 'success', response: { body: 'loaded' } }); // 😃 loaded
  printLoginState2({ state: 'fail', reason: 'no network' }); // 😱 no network
}
