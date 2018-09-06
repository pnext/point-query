import { pdrf8Parts } from './pdrf_8'
import { extended } from './pdrf_4'
import readerForReaders from '../../../reader/readerForReaders'

export default readerForReaders(
  pdrf8Parts
    .concat(extended)
)
