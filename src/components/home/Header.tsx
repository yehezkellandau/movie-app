import SearchBar from "../ui/searchBar";


const Header = () => {
    return (
      <header className="flex items-center justify-between p-4">
        <h1 className="text-3xl font-bold">The Movie Tracker</h1>
  
        <div className="flex-grow mx-4">
          <SearchBar />
        </div>
      </header>
    );
  };
  
  export default Header;