import "./formInput.css"


const FormInput = (props: { placeholder: string | undefined }) => {
    return (
        <div className="formInput">
            <label>Username</label>
            <input placeholder={props.placeholder}/>
        </div>
    )
}

export default FormInput