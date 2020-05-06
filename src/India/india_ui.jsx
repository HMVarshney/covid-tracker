import React from 'react';
import {NativeSelect, FormControl} from '@material-ui/core'
import styles from './india.module.css'

const IndiaUI = (props) => {
    return ( 
        <div>
            <FormControl className={styles.formControl}>
                <NativeSelect defaultValue='' onChange={(e)=>(props.onChange(e.target.value))}>
                    {props.stateName.map((stateName,id)=>(
                    <option
                    key={id}
                    value={stateName}>
                        {stateName}</option>))}
                </NativeSelect>
            </FormControl>
        </div>
     );
}
 
export default IndiaUI;