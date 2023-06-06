import MediaSelector from "./MediaSelector/MediaSelector";
export default function DashboardLayout({ children }) {
  return (
    <>
      <MediaSelector />
      {children}
    </>
  );
}
