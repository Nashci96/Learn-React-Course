import {render} from '@testing-library/react'
import '@testing-library/jest-dom'

import EmptyState from './index'

test('should render empty state correctly',()=>{
    const mockProps = {
        text: "Data Kosong"
    }

    const {asFragment} = render(<EmptyState {...mockProps} />)
    expect(asFragment()).toMatchSnapshot()
})