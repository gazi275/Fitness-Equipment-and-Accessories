import  { useState } from "react";
import { Menu, Dropdown, Badge, Input, Drawer } from "antd";
import {
  DownOutlined,
  UserOutlined,
  ShoppingCartOutlined,
  MenuOutlined,
} from "@ant-design/icons";

const Navbar = () => {
  const [drawerVisible, setDrawerVisible] = useState(false); 
  const [activeMenu , setActiveMenu] = useState<string | null>(null); 

  const cardioMenu = (
    <Menu>
      <Menu.Item key="1">
        <a href="#treadmills">Treadmills</a>
      </Menu.Item>
      <Menu.Item key="2">
        <a href="#ellipticals">Ellipticals</a>
      </Menu.Item>
      <Menu.Item key="3">
        <a href="#exercise-bikes">Exercise Bikes</a>
      </Menu.Item>
      <Menu.Item key="4">
        <a href="#indoor-cycling">Indoor Cycling</a>
      </Menu.Item>
      <Menu.Item key="5">
        <a href="#arc-trainers">Arc Trainers</a>
      </Menu.Item>
     
    </Menu>
  );
  const strengthMenu= (
    <Menu>
      <Menu.Item key="1">
        <a href="#treadmills">home gyms</a>
      </Menu.Item>
      <Menu.Item key="2">
        <a href="#ellipticals">benches</a>
      </Menu.Item>
      <Menu.Item key="3">
        <a href="#exercise-bikes">plates</a>
      </Menu.Item>
      <Menu.Item key="4">
        <a href="#indoor-cycling">Dumbells</a>
      </Menu.Item>
      <Menu.Item key="5">
        <a href="#arc-trainers">Arc Trainers</a>
      </Menu.Item>
     
    </Menu>
  );

  const handleDrawerOpen = () => setDrawerVisible(true);
  const handleDrawerClose = () => {
    setDrawerVisible(false);
    setActiveMenu(null);
  };

  return (
    <div>
   
      <div className="flex  justify-between items-center bg-black py-3 md:px-16">
    
        <div className="flex items-center space-x-4">
          <img
            src="/path-to-logo1.png"
            alt="Life Fitness Logo"
            className="h-6 md:h-8"
          />
          <img
            src="/path-to-logo2.png"
            alt="Hammer Strength Logo"
            className="h-6 md:h-8"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Dropdown overlay={cardioMenu} trigger={["hover"]}>
            <a
              href="#cardio"
              className="text-white font-semibold hover:text-red-500 flex items-center"
            >
              CARDIO <DownOutlined className="ml-1" />
            </a>
          </Dropdown>
          <Dropdown overlay={strengthMenu} trigger={["hover"]}>
            <a
              href="#cardio"
              className="text-white font-semibold hover:text-red-500 flex items-center"
            >
              CARDIO <DownOutlined className="ml-1" />
            </a>
          </Dropdown>
          <a href="#accessories" className="text-white font-semibold hover:text-red-500">
            ACCESSORIES
          </a>
          <a href="#outlet" className="text-white font-semibold hover:text-red-500">
            OUTLET
          </a>
          <a href="#tools" className="text-white font-semibold hover:text-red-500">
            TOOLS
          </a>
        </div>

        {/* Utility Icons */}
        <div className="flex items-center space-x-4">
          <Input
            placeholder="Search"
            
            className=" md:block bg-gray-700 text-black placeholder-gray-400 border-none "
          />
          <UserOutlined className="text-white text-lg cursor-pointer hover:text-red-500" />
          <Badge count={0} offset={[0, 0]} showZero>
            <ShoppingCartOutlined className="text-white text-lg cursor-pointer hover:text-red-500" />
          </Badge>
          <MenuOutlined
            className="text-white text-xl cursor-pointer md:hidden hover:text-red-500"
            onClick={handleDrawerOpen}
          />
        </div>
      </div>

      {/* Banner */}
      <div className="bg-red-700 text-white text-center py-2 text-sm font-bold">
        EXCLUSIVE OUTLET DEALS
      </div>

      {/* Drawer for Mobile */}
      <Drawer
        title="Menu"
        placement="right"
        onClose={handleDrawerClose}
        visible={drawerVisible}
        className="md:hidden"
      >
        <Menu mode="vertical">
          <Menu.Item key="1">
            <a href="#cardio" onClick={() => setActiveMenu("cardio")}>
              Cardio {activeMenu === "cardio" ? <DownOutlined /> : null}
            </a>
            {activeMenu === "cardio" && (
              <Menu className="ml-4">
                <Menu.Item key="1-1">
                  <a href="#treadmills">Treadmills</a>
                </Menu.Item>
                <Menu.Item key="1-2">
                  <a href="#ellipticals">Ellipticals</a>
                </Menu.Item>
                <Menu.Item key="1-3">
                  <a href="#exercise-bikes">Exercise Bikes</a>
                </Menu.Item>
                <Menu.Item key="1-4">
                  <a href="#indoor-cycling">Indoor Cycling</a>
                </Menu.Item>
                <Menu.Item key="1-5">
                  <a href="#arc-trainers">Arc Trainers</a>
                </Menu.Item>
                <Menu.Item key="1-6">
                  <a href="#rowers">Rowers</a>
                </Menu.Item>
                <Menu.Item key="1-7">
                  <a href="#scifit">SCIFIT</a>
                </Menu.Item>
                <Menu.Item key="1-8">
                  <a href="#all-cardio">All Cardio</a>
                </Menu.Item>
              </Menu>
            )}
          </Menu.Item>
          <Menu.Item key="2">
            <a href="#strength">Strength</a>
          </Menu.Item>
          <Menu.Item key="3">
            <a href="#accessories">Accessories</a>
          </Menu.Item>
          <Menu.Item key="4">
            <a href="#outlet">Outlet</a>
          </Menu.Item>
          <Menu.Item key="5">
            <a href="#tools">Tools</a>
          </Menu.Item>
        </Menu>
      </Drawer>
    </div>
  );
};

export default Navbar;
