interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="bg-black p-10 flex">
      <div className="flex flex-wrap justify-evenly">{children}</div>
    </div>
  );
};

export default Layout;
