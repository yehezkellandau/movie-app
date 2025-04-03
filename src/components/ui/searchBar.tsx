import { Input } from "@/components/ui/input";

type SearchBarProps = {
  onSearch?: () => void;
} & React.ComponentProps<"input">;


const SearchBar = ({onSearch, ...props}:SearchBarProps) => {
  const handleKeyDown = (e:React.KeyboardEvent<HTMLInputElement>) => {
    if(e.key == "Enter"){
      onSearch?.();
    }
  }
    return (
      <div className="search-container">
      <Input className="search-bar" {...props} onKeyDown={handleKeyDown} type="search"/>
      </div>
    );
  };
export default SearchBar;