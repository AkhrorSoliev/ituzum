function SkletonContainer() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-5">
      {Array(14)
        .fill(0)
        .map((_, i) => {
          return (
            <div className="flex w-64 flex-col gap-4">
              <div className="skeleton h-32 w-full"></div>
              <div className="skeleton h-4 w-28"></div>
              <div className="skeleton h-4 w-full"></div>
              <div className="skeleton h-4 w-full"></div>
            </div>
          );
        })}
    </div>
  );
}

export default SkletonContainer;
