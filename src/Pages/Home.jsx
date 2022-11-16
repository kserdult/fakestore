import React, {useEffect} from 'react';
import {useLocation} from 'react-router-dom';

//Components
import Item from '../Components/Item';
import ItemDetails from '../Components/ItemDetails';
import Cart from '../Components/Cart';

//Redux
import {useDispatch, useSelector} from 'react-redux';

//Redux Actions
import { loadItems } from '../Redux/Actions/itemsActions';

//StyledComponent and FramerMotion

const Home = () => {

    const location = useLocation();
    const pathId = location.pathname.split("/")[1];

    //Getting items from FakeStoreAPI
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(loadItems());
    },[]);

    const {items} = useSelector(state=> state.items);

    return (
    <div>
        {pathId && <ItemDetails pathId={pathId}/>}
        <Cart />

        <h1 className=" text-center fixed text-xl font-bold bg-white block w-screen top-0 py-2 text-black">FakeStore</h1>
        <div className=" flex flex-row flex-wrap gap-10 w-auto justify-center mt-11">
            {items.map ((item)=>(
                <Item key={item.id} id={item.id} image={item.image} name={item.title} price={item.price}/>
            ))}
        </div>
        <div>
            Powered by: <a href="https://fakestoreapi.com/" target="_blank">FakeStoreAPI </a>
        </div>
    </div>
    );
}

export default Home;