import { pdrf6Parts } from './pdrf_6'
import { rgb } from './pdrf_2'
import readerForReaders, { INamedReader } from '../../../reader/readerForReaders'

export const pdrf7Parts: INamedReader[] =
  pdrf6Parts
    .concat(rgb)

export default readerForReaders(
  pdrf7Parts
)