import React from "react"
import { Filter } from "../../interfaces/TodoInterface"

interface Props {
    valueFilter: Filter,
    textFilter: string
}

export const OptionFilter: React.FC<Props> = ({valueFilter, textFilter}) => {

    return (
        <option className='py-2 text-gray-800 bg-violet-300 shadow' value={valueFilter}>{textFilter}</option>
    )
}
