import { Helmet } from 'react-helmet-async';
import Cover from '../../../Shared/Cover/Cover';
import menuImg from '../../../assets/Image/menu/salad-bg.jpg';
import dessertImg from '../../../assets/Image/menu/dessert-bg.jpeg';
import useMenu from '../../../hooks/useMenu';
import SectionTitle from '../../../Component/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';


const Menu = () => {
    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const offered = menu.filter(item => item.category === 'offered');
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover img={menuImg} title='Our menu'></Cover>
            {/* main cover */}
            <SectionTitle
            subHeading="Don't Miss"
            heading="Today's Offer"
            ></SectionTitle>
            {/* offered menu items */}
            <MenuCategory items={offered}></MenuCategory>
            {/* dessert menu items */}
            <MenuCategory
            items={dessert}
            title="dessert"
            img={dessertImg}
            ></MenuCategory>
        </div>
    );
};

export default Menu;