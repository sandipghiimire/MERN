import '../style/first.css'

const First = () => {

    const styleObject = {
        backgroundColor:"red",
        color:"green"
    }
    return (
        <>
            <h1 style={{
                backgroundColor: "green",
                color: "white"
            }}
            >This is the first components</h1>
            <p className='first-para'>This components was created by me.</p>
            <button className='btn btn-primary'>See More</button>
        </>
    )

};

export default First;

// react fragment
// <>.....</>