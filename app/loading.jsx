const loading = () => {
  return (
    <>
      <div className="md:flex hidden full-large  items-center justify-center ">
        <p className="text-gray-700 dark:text-gray-200">لطفا صبر کنید ...</p>
      </div>
      <div className="md:hidden flex full-mobile  justify-center items-center">
        <p className="text-gray-700 dark:text-gray-200">لطفا صبر کنید ...</p>
      </div>
    </>
  );
};

export default loading;