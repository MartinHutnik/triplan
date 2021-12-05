import React from 'react'
import Select from 'react-select'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import {
  Form,
  FormGroup,
  Input,
  Label
} from 'reactstrap'
import CustomButton from './CustomButton'

import styles from '../styles/TripForm.module.scss'
import { useState } from 'react'

export default function TripForm(props) {

  const countries = props.countries[0]

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const [companyName, setCompanyName] = useState('');

  const [address, setAddress] = useState({
    'street': '',
    'street_num': '',
    'city': '',
    'country': '',
    'zip': ''
  });

  const [covid, setCovid] = useState('');
  const [covidTestDate, setCovidTestDate] = useState(null);

  const DateInput = React.forwardRef((props, ref) => (
    <Input
      {...props}
      ref={ref}
    />
  ))

  const changeHandler = (event, name = false) => {
    if (name) {
      const selectOption = event;
      return setAddress({...address, [name]: selectOption.label})
    }
    return setAddress({...address, [event.target.name]: event.target.value})
  }

  const onFormSubmit = (event) => {
    event.preventDefault();

    const body = {
      'start_date': startDate ? startDate.toISOString().split('T')[0] : '',
      'end_date': endDate ? endDate.toISOString().split('T')[0] : '',
      'company_name': companyName,
      'address': address,
      'covid': covid,
      'covid_test_date': covidTestDate ? covidTestDate.toISOString().split('T')[0] : ''
    }

    console.log('data form =', body);

  }

  return (
    <Form className={styles.form} onSubmit={onFormSubmit}>

      <FormGroup tag='fieldset'>
        <FormGroup className='position-relative'>
          <Label for='countries-select'>
            Where do you want to go
          </Label>
          <Select
            id='countries-select'
            instanceId='countries-select'
            options={countries}
            name='country'
            onChange={(option) => changeHandler(option, 'country')}
            placeholder='Select country'
          />
          <Input
            id='countries-input'
            name='countries_input'
            className={styles.selectValidation}
            type='text'
            value={address.country}
            onChange={() => {}}
            tabIndex={-1}
            autoComplete='off'
            required='required'
          />
        </FormGroup>
      </FormGroup>

      <FormGroup tag='fieldset'>
        <FormGroup>
          <Label for='start-date'>
            Start date
          </Label>
          <DatePicker
            id='start-date'
            name='start_date'
            type='text'
            required='required'
            placeholderText='dd.mm.yyyy'
            selected={startDate}
            minDate={new Date()}
            dateFormat='dd.MM.yyyy'
            customInput={<DateInput />}
            onChange={(date) => setStartDate(date)}
          />
        </FormGroup>
        <FormGroup>
          <Label for='end-date'>
            End date
          </Label>
          <DatePicker
            id='end-date'
            name='end_date'
            type='text'
            required='required'
            placeholderText='dd.mm.yyyy'
            selected={endDate}
            minDate={startDate}
            dateFormat='dd.MM.yyyy'
            customInput={<DateInput />}
            onChange={(date) => setEndDate(date)}
            disabled={!startDate}
          />
        </FormGroup>
      </FormGroup>

      <FormGroup tag='fieldset'>
        <FormGroup>
          <Label for='company-name'>
            Company name
          </Label>
          <Input
            id='company-name'
            name='company_name'
            placeholder='Type here...'
            type='text'
            onChange={(event) => setCompanyName(event.target.value)}
            required='required'
          />
        </FormGroup>
        <FormGroup>
          <Label for='city'>
            City
          </Label>
          <Input
            id='city'
            name='city'
            placeholder='Type here...'
            type='text'
            onChange={changeHandler}
            required='required'
          />
        </FormGroup>
        <FormGroup>
          <Label for='street'>
            Street
          </Label>
          <Input
            id='street'
            name='street'
            placeholder='Type here...'
            type='text'
            onChange={changeHandler}
            required='required'
          />
        </FormGroup>
        <FormGroup>
          <Label for='street-number'>
            Street number
          </Label>
          <Input
            id='street-num'
            name='street_num'
            placeholder='Type here...'
            type='text'
            onChange={changeHandler}
            required='required'
          />
        </FormGroup>
        <FormGroup>
          <Label for='zip-code'>
            Zip code
          </Label>
          <Input
            id='zip'
            name='zip'
            placeholder='Type here...'
            type='text'
            onChange={changeHandler}
            required='required'
          />
        </FormGroup>
      </FormGroup>

      <FormGroup
        tag='fieldset'
        className={covid ? styles.covidTestQuestion : ''}
      >
        <FormGroup>
          <Label>
            Have you been recently tested for <strong>COVID-19?</strong>
          </Label>
        </FormGroup>
        <FormGroup check inline>
          <Input
            name='covid_check'
            type='radio'
            value='yes'
            checked={covid}
            onChange={() => setCovid(true)}
          />
          {' '}
          <Label check>
            Yes
          </Label>
        </FormGroup>
        <FormGroup check inline>
          <Input
            name='covid_check'
            type='radio'
            value='no'
            checked={covid === false}
            onChange={() => setCovid(false)}
          />
          {' '}
          <Label check>
            No
          </Label>
        </FormGroup>
      </FormGroup>
      <FormGroup
        tag='fieldset'
        className={styles.covid}
        hidden={!covid}
      >
        <FormGroup>
          <Label for='covid-test-date'>
            Date of receiving test results
          </Label>
          <DatePicker
            id='covid-test-date'
            name='covid_test_date'
            type='text'
            required={covid ? covid : 'required'}
            placeholderText='dd.mm.yyyy'
            selected={covidTestDate}
            maxDate={startDate}
            dateFormat='dd.MM.yyyy'
            customInput={<DateInput />}
            onChange={(date) => setCovidTestDate(date)}
            disabled={!covid}
          />
        </FormGroup>
      </FormGroup>

      <CustomButton
        styles={['yellow', 'save']}
        type='submit'
        text='Save'
        imageName='tick'
        imageWidth={16}
        imageHeight={11}
      />

    </Form>
  )
}