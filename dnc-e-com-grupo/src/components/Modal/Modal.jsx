import './index.scss'

const modal = ({open, onClose}) => {
    if(!open) return null
  return (
    <section onClick={onClose} className='overlay'>
        <div onClick={(e) => {e.stopPropagation()}} className="modalContainer">
            <p onClick={onClose} className="closeBtn">X</p>

            <label htmlFor="name">Nome:</label>
            <input type="text" placeholder="Digite seu nome"/>

            <label htmlFor="email">E-mail:</label>
            <input type="text" placeholder="Digite seu e-mail"/>

            <label htmlFor="subject">Assunto:</label>
            <input type="text" placeholder="Digite o assunto" />

            <label htmlFor="msg">Mensagem</label>
            <input type="text" placeholder="Digite sua mensagem" />

            <button>
              <span>Enviar mensagem</span>
            </button>
        </div>
    </section>
  )
}

export default modal