import React from 'react';
// @ts-ignore
import {storiesOf} from '@storybook/react';

// @ts-ignore
import {Welcome} from '@storybook/react/demo';

storiesOf('Getting Starterd', module)
    .add('Installation', () => {

    return (

        <article style={{fontFamily: "inherit"}}>
            <h2>Installation</h2>
            <section>
                To install Rome UI just run the command  <code>yarn add romeui</code> or <code> npm i romeui </code>
            </section>
        </article>
    )
});


