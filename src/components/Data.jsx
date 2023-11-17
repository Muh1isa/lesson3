import like from '../../public/images/like.svg'


export default function Data({title, image}) {
  return (
    <li className="list-item">
        <img src={like} alt="" className='like-icon' />
        <img src={image} alt="" width={240} height={280} />
        <h2>{title}</h2>
        <button>В корзину</button>
    </li>
  )
}
