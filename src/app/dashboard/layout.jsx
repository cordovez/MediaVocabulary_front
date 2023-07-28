import MediaSelector from "./MediaSelector/MediaSelector";
export default function DashboardLayout({ children }) {
  return (
    <div className="flex flex-col items-center">
      <MediaSelector />
      {children}
    </div>
  );
}
