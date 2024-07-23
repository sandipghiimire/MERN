
import React from 'react'
import IdcardOne from '../ui/IdcardOne'
import student from '../../src/idcard.json' 

const DispalyIdCard = () => {
    return (
        <div className="container-fluid">

            <div className="row row-cols-1 row-cols-md-4 g-4">
                {
                    student.map((student, index) => (
                        <IdcardOne image={student.student_image_url}
                        image2={student.student_image2_url}
                        studentId={student.student_id}
                        phone={student.student_phone}
                        birthdate={student.student_bod}
                        address={student.student_address}
                        name={student.student_name} />
                    ))
                }
            </div>
        </div>
    )
}

export default DispalyIdCard


