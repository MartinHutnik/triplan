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
  const [country, setCountry] = useState({value: '', label: ''});

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [covidTestDate, setCovidTestDate] = useState(null);

  const [covidTestAnswer, setCovidTestAnswer] = useState('');

  const DateInput = React.forwardRef((props, ref) => (
    <Input
      {...props}
      ref={ref}
    />
  ))

  const onFormSubmit = data => console.log('data form =', data);

  console.log('country =', country)
  console.log('startDate =', startDate ? startDate.toISOString().split('T')[0] : '')
  console.log('endDate =', endDate ? endDate.toISOString().split('T')[0] : '')
  console.log('covidTestDate =', covidTestDate)
  console.log('covidTestAnswer =', covidTestAnswer)

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
            onChange={(option) => setCountry(option)}
            placeholder='Select country'
          />
          <Input
            id='countries-input'
            name='countries-input'
            className={styles.selectValidation} 
            type='text'
            value={country.label}
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
            name='start-date'
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
            name='end-date'
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
            name='company-name'
            placeholder='Type here...'
            type='text'
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
            required='required'
          />
        </FormGroup>
        <FormGroup>
          <Label for='street-number'>
            Street number
          </Label>
          <Input
            id='street-number'
            name='street-number'
            placeholder='Type here...'
            type='text'
            required='required'
          />
        </FormGroup>
        <FormGroup>
          <Label for='zip-code'>
            Zip code
          </Label>
          <Input
            id='zip-code'
            name='zip-code'
            placeholder='Type here...'
            type='text'
            required='required'
          />
        </FormGroup>
      </FormGroup>

      <FormGroup
        tag='fieldset'
        className={covidTestAnswer ? styles.covidTestQuestion : ''}
      >
        <FormGroup>
          <Label>
            Have you been recently tested for <strong>COVID-19?</strong>
          </Label>
        </FormGroup>
        <FormGroup check inline>
          <Input
            name='covid-check'
            type='radio'
            value='yes'
            checked={covidTestAnswer}
            onChange={() => setCovidTestAnswer(true)}
          />
          {' '}
          <Label check>
            Yes
          </Label>
        </FormGroup>
        <FormGroup check inline>
          <Input
            name='covid-check'
            type='radio'
            value='no'
            checked={covidTestAnswer === false}
            onChange={() => setCovidTestAnswer(false)}
          />
          {' '}
          <Label check>
            No
          </Label>
        </FormGroup>
      </FormGroup>
      <FormGroup
        tag='fieldset'
        className={styles.covidTestAnswer}
        hidden={!covidTestAnswer}
      >
        <FormGroup>
          <Label for='covid-test-date'>
            Date of receiving test results
          </Label>
          <DatePicker
            id='covid-test-date'
            name='covid-test-date'
            type='text'
            //required='required'
            placeholderText='dd.mm.yyyy'
            selected={covidTestDate}
            maxDate={startDate}
            dateFormat='dd.MM.yyyy'
            customInput={<DateInput />}
            onChange={(date) => setCovidTestDate(date)}
            //disabled={!startDate}
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