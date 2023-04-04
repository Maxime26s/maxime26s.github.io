type ListItemProps = {
  children: React.ReactNode;
};

function ListItem({ children }: ListItemProps) {
  return (
    <li className="flex items-start">
      <div className="mt-2.5 w-1.5 h-1.5 min-w-[0.375rem] rounded-full bg-blue-500 mr-2"></div>
      {children}
    </li>
  );
}

export default ListItem;
