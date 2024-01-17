import { FormWrapper } from "./FormWrapper"

export function AccountForm() {
    return (
        <FormWrapper title="Login Information">
            <label>Email</label>
            <input autoFocus required type="email" />
            <label>Password</label>
            <input required type="password" />
        </FormWrapper>
    )
}