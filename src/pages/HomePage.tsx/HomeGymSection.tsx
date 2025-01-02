import { Button } from 'antd';

const HomeGymSection = () => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-between p-8 mt-10">
      <div className="md:w-1/2">
        <img
          src="https://shop.lifefitness.com/cdn/shop/files/kane-brown-home-gym.jpg?v=1695225917&width=2000"
          alt="Custom Home Gym"
          className="rounded-lg w-full"
        />
      </div>
      <div className="md:w-2/5 text-left mt-8 md:mt-0">
        <h5 className="text-sm font-bold text-gray-500 mb-2">COMPLIMENTARY</h5>
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Custom Home Gym Design</h1>
        <p className="text-lg text-gray-600 mb-6">
          From $10,000 efficient spaces, to $150,000 dream gyms, we can help you build the perfect fitness space for your home.
        </p>
        <Button type="primary" className='py-5' danger>
      learn More
    </Button>
      </div>
    </div>
    );
};

export default HomeGymSection;