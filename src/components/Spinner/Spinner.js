import wheel from '../../wheel.png'
import './spinner.css'

export const Spinner = () => {

    return (
        <div className='spinnerContainer'>
            <img className='spinner' src={wheel} alt="spinner" />
        </div>
    )
}