import Select from 'react-select'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";
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
  const [startDate, setStartDate] = useState(new Date());
  //const [startDate, setStartDate] = useState(null);
  const [country, setCountry] = useState({value: '', label: ''});

  return (
    <Form className={styles.form}>

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
            selected={startDate}
            placeholderText='dd.mm.yyyy'
            dateFormat='dd.MM.yyyy'
            onChange={(date) => setStartDate(date)}
          />
        </FormGroup>
        <FormGroup>
          <Label for='end-date'>
            End date
          </Label>
          <Input
            id='end-date'
            name='end-date'
            placeholder='dd.mm.year'
            type='date'
            required='required'
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

      <FormGroup tag='fieldset'>
        <FormGroup>
          <Label>
            Have you been recently tested for COVID-19?
          </Label>
        </FormGroup>
        <FormGroup check inline>
          <Input
            name='covid-check'
            type='radio'
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
          />
          {' '}
          <Label check>
            No
          </Label>
        </FormGroup>
      </FormGroup>

      <CustomButton
        styles={['yellow', 'save']}
        text='Save'
        imageName='tick'
        imageWidth={16}
        imageHeight={11}
      />

    </Form>
  )
}