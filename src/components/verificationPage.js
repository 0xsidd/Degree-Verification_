import React, { Component } from 'react'
import { init,verifyDetails } from '../components/web3Client'




function verifyDegree() {

	  const handleSubmit = async(e) => {
		  await init();
          e.preventDefault();
          await verifyDetails(3);   //tokenId=3 is to be taken from user to verify

		  e.preventDefault();
	
	}
    return (
		<div >
            <button onClick={handleSubmit}> Verify Degree</button>
		</div>


    )
}

export default verifyDegree

