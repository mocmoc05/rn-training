/* Function Component  => Stateless component */

import React, { Component, Fragment } from 'react';
import { Text, View } from 'react-native';

export function Footer() {
    return (
        <Fragment>
            <Text style={{ textAlign: 'center', fontSize: 30 }}>Footer</Text>
            <Text style={{ textAlign: 'center', fontSize: 30 }}>Hello</Text>
        </Fragment>
    )
}