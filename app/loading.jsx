const loading = () => {
  return (
    <>
      <div className="hidden full-large md:flex items-center justify-center">
        <div className="loader"></div>
      </div>
      <div className="md:hidden h-96 flex justify-center items-center">
        <div className="loader"></div>
      </div>
    </>
  );
};

export default loading;
