
export default function Signin({setModal, name, setName, psw, setPsw}) {
  return (
    <div className="modal-wrapper">
        <div className="modal">
            <span onClick={() => setModal(false)}>x</span>
            <h2>Вход</h2>
            <input type="text" placeholder="Username" /><br /><br />
            <input type="password" placeholder="Password" /><br /><br />
            <button>Вход</button>
        </div>
    </div>
  )
}
