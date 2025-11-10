import './loaderstemplate.css'
function Loaderstemplate() {
    return (
        <>
            <div className='differentloaders'>
                <div><div class="spinner"></div></div>
                <div><div class="dual-ring"></div></div>
                <div class="dots-loader">
                    <div></div><div></div><div></div>
                </div>
                <div class="bar-loader"></div>
                <div class="spinner-with-text">
                    <div class="circle"></div>
                    <p>Loading...</p>
                </div>
            </div>

        </>
    )
}

export default Loaderstemplate