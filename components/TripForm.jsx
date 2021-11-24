import Select from 'react-select'
import {
  Button,
  Form,
  FormGroup,
  Input,
  Label
} from 'reactstrap'

import styles from '../styles/TripForm.module.scss'

export default function TripForm(props) {

  const countries = props.countries[0]

  return (
    <Form className={styles.form}>

      <FormGroup tag='fieldset'>
        <FormGroup>
          <Label for='countries-select'>
            Where do you want to go
          </Label>
          <Select
            id='countries-select'
            instanceId='countries-select'
            options={countries}
            placeholder='Select country'
          />
          </FormGroup>
      </FormGroup>

      <FormGroup tag='fieldset'>
        <FormGroup>
          <Label for='start-date'>
            Start date
          </Label>
          <Input
            id='start-date'
            name='start-date'
            placeholder='dd.mm.year'
            type='date'
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

      <Button>
        Submit
      </Button>

    </Form>
  )
}