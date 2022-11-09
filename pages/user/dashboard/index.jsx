export default function Page() {
  return (
    <>
      <h1>Dashboard</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5 my-3">
        <div className="rounded text-center bg-brand-500 text-white p-5">
          <div className="text-4xl">365</div>
          <div>Customers</div>
        </div>
        <div className="rounded text-center bg-brand-600 text-white p-5">
          <div className="text-4xl">12</div>
          <div>Enquiries</div>
        </div>
        <div className="rounded text-center bg-brand-700 text-white p-5">
          <div className="text-4xl">9</div>
          <div>Tasks</div>
        </div>
        <div className="rounded text-center bg-brand-800 text-white p-5">
          <div className="text-4xl">65</div>
          <div>Leads</div>
        </div>
      </div>
    </>
  );
}
