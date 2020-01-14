import React from 'react';
import {
    View
} from '../../styled';
import { NavLink } from 'react-router-dom';

function NotFound(){
    return(
        <View flex justC='center' alignI='center' fD='column'>
            <View><h1>Page Not Found</h1></View>
            <View>Please keep calm and </View>
            <View flex justC='center' alignI='center' fD='column'>
                <h3>Back to</h3>
                <NavLink to='/'> Home Page </NavLink>
            </View>
        </View>
    )
}

export default NotFound