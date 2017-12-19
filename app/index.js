import React from 'react'
import {render} from 'react-dom'
import {AppContainer} from 'react-hot-loader'
import Hello from './compoents/hello'

render(
    <AppContainer>
        <Hello />
    </AppContainer>
   ,
    document.getElementById('root')
)
if (module.hot) {
    module.hot.accept('./root', () => {
        const NewRoot = require('./root').default;
        render(
            <AppContainer>
                <NewRoot />
            </AppContainer>,
            document.getElementById('root')
        );
    });
}