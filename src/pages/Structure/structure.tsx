import Footer from "../../components/Footer"
import Header from "../../components/Header"

interface info {
    body: React.ReactNode    
}

const Structure = ({body}: info) => {
    return (
        <>
            <Header/>
            {body}
            <Footer/>
        </>
    )
}

export default Structure