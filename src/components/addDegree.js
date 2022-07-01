import React, { Component } from 'react'
import { init,addDegree} from '../components/web3Client'




function adddegree() {

	const handleSubmit = async(e) => {
		  await init();
          e.preventDefault();
          await addDegree("https://bafkreidizckp3bbotn7g4d7w6fbnrumleaobofwomwdqcraevtt5ef3hoy.ipfs.nftstorage.link/");  // link is to be taken from user who is authenticator and wants to add degreer to blockchain
		  e.preventDefault();
	}
    
    return (
		<div>
            <button onClick={handleSubmit}> Add Degree </button>
		</div>
    )
}

export default adddegree

