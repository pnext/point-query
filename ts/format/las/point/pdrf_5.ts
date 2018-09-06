import { pdrf0Parts } from './pdrf_0'
import { gpsTime } from './pdrf_1'
import { rgb } from './pdrf_2'
import { extended } from './pdrf_4'
import readerForReaders from '../../../reader/readerForReaders'

export default readerForReaders(
  pdrf0Parts
    .concat(gpsTime)
    .concat(rgb)
    .concat(extended)
)
