export default function Tabs({ children, buttons, buttonsContainer }) {
    const ButtonsContainer = buttonsContainer
    return (<>
    <menu>{buttons}</menu>
    {children}
    </>
    )
}