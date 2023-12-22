import { useState } from 'react'
import { MultiSelect } from 'react-multi-select-component'
import { Component } from './styles.ts'

export function Select() {
  const options = [
    { label: 'Front End', value: 1 },
    { label: 'Back End', value: 2 },
    { label: 'Mobile', value: 3 },
    { label: 'Dev Ops', value: 4 },
  ]

  const [selected, setSelected] = useState([])

  return (
    <Component>
      <MultiSelect
        options={options}
        value={selected}
        onChange={setSelected}
        labelledBy="Select"
        disableSearch
        hasSelectAll={false}
        overrideStrings={{
          selectSomeItems: 'Selecione as Tags...',
          allItemsAreSelected: 'Todas as Tags Selecionadas',
        }}
      />
    </Component>
  )
}
