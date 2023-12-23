import { useEffect, useState } from 'react'
import { MultiSelect } from 'react-multi-select-component'
import { Component } from './styles.ts'
import { api } from '../../lib/axios.ts'

interface Tag {
  value: number
  label: string
  created_at: string
}

interface TagProps {
  onSelectedTags: (tags: Tag) => void
  tags: Tag[]
}

export function Select({ tags, onSelectedTags }: TagProps) {
  const [selected, setSelected] = useState<Tag[]>([])
  const [options, setOptions] = useState<Tag[]>([])

  function handleSetSelect(tags: Tag) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    setSelected(tags)
    onSelectedTags(tags)
  }

  useEffect(() => {
    setSelected(tags)
  }, [tags])

  useEffect(() => {
    api.get('tags').then((response) => {
      setOptions(response.data.data)
    })
  }, [])

  return (
    <Component>
      <MultiSelect
        options={options}
        value={selected}
        onChange={handleSetSelect}
        labelledBy="Select Multiple"
        disableSearch
        hasSelectAll={false}
        overrideStrings={{
          selectSomeItems: 'Selecione as Tags...',
          allItemsAreSelected: 'Todas as Tags Selecionadas',
          noOptions: 'Não há Tags cadastradas',
        }}
      />
    </Component>
  )
}
