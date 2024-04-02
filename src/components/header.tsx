import nlwicon from '../assets/nlw-icon.svg'





export function Header() {
    return (
        <div>
            <img src={nlwicon} alt="logo icon nlw" />

            <nav>
                <a href="">Eventos</a>
                <a href="">Participantes</a>

            </nav>

        </div>
    )
}