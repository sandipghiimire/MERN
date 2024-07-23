import React from 'react'

const IdcardOne = ({image, image2, name, address, phone, birthdate, studentId}) => {
  return (
    <div className='col'>
                <div class="card border-success mb-3">
                    <div class="card-header bg-transparent border-success">
                        <img src={image} alt="..." style={{height:'100px', widows:'100px'}} />
                    </div>
                    <div class="card-body text-success">
                        <h5 class="card-title"><img src={image2} alt="..." style={{height:'100px', widows:'100px'}} /></h5>
                        <p class="card-text">ID: {studentId}</p>
                        <p class="card-text">Name: {name}</p>
                        <p class="card-text">Address: {address}</p>
                        <p class="card-text">Phone: {phone}</p>
                        <p class="card-text">BOD: {birthdate}</p>
                    </div>
                    <div class="card-footer bg-transparent border-success">Nepal Mega College Bamermahal, Kathmandu</div>
                </div>
            </div>
)
}

export default IdcardOne