import { useState, useEffect } from 'react';

import DigimonIOServices from '../Services/DigimonIOServices';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const NewCardAutoComplete = ({cards}) =>
{
    const [apiData, setApiData] = useState ([])

    useEffect (() =>
    {
        DigimonIOServices.getAll().then (data => {
            setApiData (data)
            console.log('data', data)
        })
    }, [])

    if (apiData.length <= 0)
        return null

    return (
        <Autocomplete
            id="new-card-autocomplete"
            options={apiData}
            autoComplete
            onChange={(event, value) => console.log('value', value)}
            getOptionLabel={(option) => option.name}
            renderOption={(props, option) => (
                <Box component="li" {...props} key={option.cardnumber}>
                    {option.name} - {option.cardnumber}
                </Box>
            )}
            renderInput={params => (
                <TextField
                    {...params}
                    label="Search for a card"
                    inputProps={{
                        ...params.inputProps,
                        autoComplete: 'new-password',
                    }}
                />
            )}
        />
    )
}

export default NewCardAutoComplete