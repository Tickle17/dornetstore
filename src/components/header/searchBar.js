import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function ComboBox() {
   return (
      <Autocomplete
         disablePortal
         id="combo-box-demo"
         options={merchs}
         sx={{ width: 150,borderRadius: '20px',
            '& .MuiAutocomplete-inputRoot': {
               display: 'flex',
               alignItems: 'center',
            },
            '& .MuiAutocomplete-endAdornment': {
               marginTop: 0,
               marginBottom: 0,
            },
            '& .MuiFormControl-marginNormal': {
               marginTop: 0,
               marginBottom: 0,
            },
            '& .MuiInputBase-input': {
               paddingTop: 0,
               paddingBottom: 0,
            },
            '& .MuiAutocomplete-clearIndicator': {
               marginTop: 0,
               marginBottom: 0,
            },
            '& .MuiAutocomplete-popupIndicator': {
               marginTop: 0,
               marginBottom: 0,
            },
            '& .MuiAutocomplete-option': {
               paddingTop: '6px',
               paddingBottom: '6px',
            },
            '& .MuiAutocomplete-option[selected]': {
               backgroundColor: 'rgba(0, 0, 0, 0.1)',
            },
            '& .MuiAutocomplete-noOptions': {
               padding: '6px',
            },
            '& .MuiAutocomplete-popupIndicatorOpen': {
               transform: 'rotate(180deg)',
            },
            '& .MuiOutlinedInput-root': {
               '& fieldset': {
                  borderColor: 'transparent',
               },
               '&.Mui-focused fieldset': {
                  borderColor: 'transparent',
               },
            }, }}
         renderInput={(params) => <TextField {...params}/>}
         style={{backgroundColor:"lightgray",borderRadius:"20px"}}

      />
   );
}
const merchs = [
   {label:"Все"},
   {label:"Рюкзак"},
   {label:"Плед"},
   {label:"Зонт"},
   {label:"Термос"},
   {label:"Брелок"}
];
