import SpinnerMini from "./SpinnerMini";

export function Section({
  title,
  formOpen,
  toggleForm,
  onSubmit,
  isLoading,
  children,
}) {
  return (
    <>
      <h1 className="text-2xl sm:text-3xl font-bold mb-6">{title}</h1>

      <button
        onClick={toggleForm}
        className="bg-white text-black px-4 py-2 rounded mb-6"
      >
        {formOpen ? "Close Form" : `Add ${title}`}
      </button>

      {formOpen && (
        <form onSubmit={onSubmit} className="space-y-4 mb-8">
          {children}
          <button
            disabled={isLoading}
            className="bg-white text-black px-4 py-2 rounded"
          >
            {isLoading ? <SpinnerMini /> : "Submit"}
          </button>
        </form>
      )}
    </>
  );
}
