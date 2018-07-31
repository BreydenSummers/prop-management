import axios from 'axios';
import { Root_URL } from '../config';

export function signUp (fields, success) {
    console.log(fields);

    return function(dispach) {
     axios.post(`${Root_URL}/signUp`, fields)
        .then(response =>{
            console.log(response);
            success();
     })
    .catch(err => {
         if (err) {console.log(err)}
     })
    }
}