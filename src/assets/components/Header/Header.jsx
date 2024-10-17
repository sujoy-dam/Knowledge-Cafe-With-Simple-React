import profile from '../../images/profile.png'
const Header = () => {
    return (
        <div className="flex justify-between items-center py-8">
            <h1 className='text-4xl font-bold'>Knowledge Cafe</h1>
            <img src={profile} alt="" />
        </div>
    );
};

export default Header;