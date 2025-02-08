export default function Contact({ className }: { className?: string }) {
  return (
    <div
      id="contact"
      className={`flex flex-col justify-center text-center items-center gap-3 p-3 ${className}`}
    >
      <h2 className="text-4xl">Contact me</h2>
      {/* Add a form to collect contact details */}
    </div>
  );
}
