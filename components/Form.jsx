import Select from 'react-select'

export default function Form(props) {
  return (
    <Select
      id='countries-select'
      instanceId='countries-select'
      options={props.countries}
    />
  )
}