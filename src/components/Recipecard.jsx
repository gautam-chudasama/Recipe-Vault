import { Link } from 'react-router-dom';

const Recipecard = (props) => {
    const {id, image, description, title} = props.recipe;
  return (
    <Link
    to={`/recipes/detail/${id}`}
    className='duration-300 hover:scale-103 mt-3 mr-3 mb-3 block w-[15vw] rounded overflow-hidden shadow'>
    
    <img className='w-full h-[27vh] object-cover' src={image} alt={title} />
    
    <h1 className='px-2 mt-2 font-black'>{title}</h1>
    
    <p className='px-2 pb-3'>{description.slice(0,63)}...   <small className='text-blue-700'>more</small></p>
    </Link>
  )
}

export default Recipecard