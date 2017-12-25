import MiniBlockchainBlockData from './Mini-Blockchain-Block-Data'
import InterfaceBlockchainBlock from 'common/blockchain/interface-blockchain/blocks/Interface-Blockchain-Block'

class MiniBlockchainBlock extends InterfaceBlockchainBlock {

    createEmptyBlockData(){
        return new MiniBlockchainBlockData(this.blockchain );
    }

}

export default MiniBlockchainBlock