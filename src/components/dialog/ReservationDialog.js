import React, { useState } from 'react';
import {
    Autocomplete,
    Box,
    Button,
    Card,
    Checkbox,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    FormControl,
    FormControlLabel,
    FormGroup,
    FormHelperText,
    Input,
    InputLabel,
    MenuItem,
    Radio,
    RadioGroup,
    Select,
    Slide,
    Stack,
    Switch,
    TextField,
    useMediaQuery,
    useTheme
} from '@mui/material';

const topOptions = [
    { title: 'angular' },
    { title: 'material' },
    { title: 'labtest' },
];

const InputAdornments = () => {
    const [age, setAge] = useState('');
    const [inputLenght ,setInputLength] = useState(0)
    const [open, setOpen] = useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    const lenghtHandler = (e) => {
        setInputLength(e.target.value.lenght)
    }

    const Transition = React.forwardRef((props, ref) => (
        <Slide direction="up" ref={ref} {...props} />
    ));

    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
            Hotel Registration Form
            </Button>

            <Dialog fullScreen open={open} TransitionComponent={Transition}>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        <Card sx={{ mx: '2px', width: '95%', padding: '20px', marginTop: '10px' }}>
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', marginTop: '20px' }}>
                                <Card
                                    sx={{ mx: '2px', width: "95%", padding: "20px", marginTop: "10px" }}

                                >
                                    <Box sx={{ display: 'flex', flexWrap: 'wrap', marginTop: "20px" }}>
                                        {/* Date Picker */}
                                        <div>
                                            <FormControl sx={{ m: 1, width: '15ch' }} variant="outlined">
                                                <TextField
                                                    id="date-picker"
                                                    type="date"
                                                    variant="standard"
                                                />
                                                <InputLabel shrink htmlFor="date" style={{ marginTop: '-15px' }}>
                                                    Date of Arrival
                                                </InputLabel>
                                            </FormControl>

                                            <FormControl sx={{ m: 1, width: '15ch' }} variant="outlined">
                                                <TextField
                                                    id="date-picker"
                                                    type="date"
                                                    variant="standard"
                                                />
                                                <InputLabel shrink htmlFor="date" style={{ marginTop: '-15px' }}>
                                                    End of Departure
                                                </InputLabel>
                                            </FormControl>
                                        </div>
                                    </Box>

                                    {/* Room Type*/}

                                    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                                        <div>
                                            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                                                <InputLabel id="demo-simple-select-standard-label">Room Size</InputLabel>
                                                <Select
                                                    labelId="demo-simple-select-standard-label"
                                                    id="demo-simple-select-standard"
                                                    value={age}
                                                    onChange={handleChange}
                                                    label="Room Size"
                                                >
                                                    <MenuItem value={10}>Business Suite</MenuItem>
                                                    <MenuItem value={20}>Presidential Suite</MenuItem>
                                                </Select>
                                                <FormHelperText id="standard-weight-helper-text">Choose a room type</FormHelperText>
                                            </FormControl>

                                            <FormControl variant="standard" sx={{ mt: 3, width: '15ch' }}>
                                                <Input
                                                    id="standard-adornment-weight"
                                                    type='text'
                                                    aria-describedby="standard-weight-helper-text"
                                                    inputProps={{
                                                        'aria-label': 'weight',
                                                    }}
                                                />
                                                <FormHelperText id="standard-weight-helper-text">Maximum:5</FormHelperText>
                                            </FormControl>
                                        </div>
                                    </Box>

                                    {/* firstName*/}

                                    <Box sx={{ mt: 1, width: '15ch' }}>
                                        <TextField
                                            label="First Name"
                                            id="standard-size-normal"
                                            // defaultValue="First Name"
                                            variant="standard"
                                            onTextChange={ lenghtHandler}
                                        />
                                        <FormHelperText id="standard-weight-helper-text" sx={{ textAlign: "end" }}>{inputLenght.length}/50</FormHelperText>
                                    </Box>

                                    {/*lastName*/}

                                    <Box sx={{ mt: 1, width: '15ch' }}>
                                        <TextField
                                            label="Last Name"
                                            id="standard-size-normal"
                                            // defaultValue="Last Name"
                                            variant="standard"
                                        />
                                        <FormHelperText id="standard-weight-helper-text" sx={{ textAlign: "end" }}>3/50</FormHelperText>
                                    </Box>

                                    {/*EmailId*/}

                                    <Box sx={{ mt: 1, width: '15ch' }}>
                                        <TextField
                                            label="E-Mail"
                                            id="standard-size-normal"
                                            // defaultValue="Last Name"
                                            variant="standard"
                                        />
                                    </Box>

                                    {/*Phone Number*/}

                                    <Box sx={{ mt: 1, width: '15ch' }}>
                                        <TextField
                                            label="Phone Number"
                                            // id="standard-size-normal"
                                            // defaultValue="Last Name"
                                            variant="standard"
                                        />
                                        <FormHelperText id="standard-weight-helper-text" >Add your country code first</FormHelperText>
                                    </Box>

                                    {/* Address */}
                                    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                                        <Box sx={{ mt: 1, width: '15ch' }}>
                                            <TextField
                                                label="Street Name"
                                                id="standard-size-normal"
                                                // defaultValue="Last Name"
                                                variant="standard"
                                            />
                                        </Box>

                                        <Box sx={{ mt: 1, width: '15ch' }}>
                                            <TextField
                                                label="Street Number"
                                                id="standard-size-normal"
                                                // defaultValue="Last Name"
                                                variant="standard"
                                            />
                                        </Box>

                                    </Box>
                                    {/* Zip,State,City */}
                                    <Box sx={{ display: 'flex', m: 2, }}>
                                        <Box sx={{ mt: 1, width: '15ch' }}>
                                            <TextField
                                                label="Zip"
                                                id="standard-size-normal"
                                                // defaultValue="Last Name"
                                                variant="standard"
                                            />
                                        </Box>

                                        <Box sx={{ mt: 1, width: '15ch' }}>
                                            <TextField
                                                label="State"
                                                id="standard-size-normal"
                                                // defaultValue="Last Name"
                                                variant="standard"
                                            />
                                        </Box>

                                        <Box sx={{ mt: 1, width: '15ch' }}>
                                            <TextField
                                                label="City"
                                                id="standard-size-normal"
                                                // defaultValue="Last Name"
                                                variant="standard"
                                            />
                                        </Box>

                                    </Box>

                                    {/* Extras*/}

                                    <Box sx={{ display: 'flex', flexWrap: 'wrap', m: 1 }}>
                                        <div>
                                            <FormControl variant="standard" sx={{ width: '15ch' }}>
                                                <InputLabel id="demo-simple-select-standard-label">Extras</InputLabel>
                                                <Select
                                                    labelId="demo-simple-select-standard-label"
                                                    id="demo-simple-select-standard"
                                                    value={age}
                                                    onChange={handleChange}
                                                    label="Room Size"
                                                >
                                                    <MenuItem value={10}>Extra Parking</MenuItem>
                                                    <MenuItem value={20}>Extra Balcony</MenuItem>
                                                </Select>

                                            </FormControl>
                                        </div>
                                    </Box>

                                    {/* Payment  */}

                                    <Box sx={{ display: 'flex', flexWrap: 'wrap', m: 1 }}>
                                        <FormControl sx={{ color: "Black" }}>
                                            <RadioGroup
                                                row
                                                aria-labelledby="demo-row-radio-buttons-group-label"
                                                name="row-radio-buttons-group"
                                                color="success"
                                            >

                                                <FormControlLabel value="female" control={<Radio style={{ color: "#b8236b" }} />} label="Credit Card" />
                                                <FormControlLabel value="male" control={<Radio style={{ color: "#b8236b" }} />} label="PayPal" />
                                                <FormControlLabel value="Cash" control={<Radio style={{ color: "#b8236b" }} />} label="Cash" />
                                                <FormControlLabel value="Bitcoin" control={<Radio style={{ color: "#b8236b" }} />} label="Bitcoin" />
                                            </RadioGroup>
                                        </FormControl>
                                    </Box>

                                    {/* Personal Note  */}
                                    <Box sx={{ mt: 1, width: '15ch' }}>
                                        <TextField
                                            label="Personal Note"
                                            id="standard-size-normal"
                                            // defaultValue="Last Name"
                                            variant="standard"
                                        />
                                    </Box>

                                    {/* Tags */}
                                    <Box sx={{ mt: 1, width: '15ch' }}>
                                        <Stack spacing={3} sx={{ width: 500 }}>
                                            <Autocomplete
                                                multiple
                                                id="tags-standard"
                                                options={topOptions}
                                                getOptionLabel={(option) => option.title}
                                                // defaultValue={[top100Films[13]]}
                                                renderInput={(params) => (
                                                    <TextField
                                                        {...params}
                                                        variant="standard"
                                                        label="Multiple values"
                                                        placeholder="Favorites"
                                                    />
                                                )}
                                            />

                                        </Stack>
                                    </Box>

                                    {/* SWITCH */}


                                    <div style={{ display: "flex", flexWrap: 'wrap' }}>
                                        <FormControlLabel control={<Switch style={{ color: "#b8236b" }} />} label="Send me a reminder" />

                                    </div>
                                    <div style={{ display: "flex", flexWrap: 'wrap' }}>
                                        <FormControlLabel control={<Switch style={{ color: "#b8236b" }} />} label="Subscribe to newsletter" />
                                    </div>


                                    {/* CheckBox */}
                                    <div>

                                        <FormControlLabel control={<Checkbox style={{ color: "#b8236b" }} />} label="I confrim the information given above" />
                                    </div>
                                </Card>

                            </Box>
                        </Card>
                    </DialogContentText>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default InputAdornments;
