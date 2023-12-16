import Link from "next/link";

const BedSpace = () => {



  return (
    <div className='items-center  flex justify-center flex-col mt-20 mb-20'>
      <h1 className='md:text-[40px] mb-10 text-[30px] font-bold text-center'>Available Spaces</h1>

      <div className="gap-6 items-center justify-center flex flex-col ">


        <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
          <div className='flex justify-end mx-5 gap-2'>
            <button className="btn">
              Awo renovated block 
              <div className="badge">₦90k</div>
            </button>
            <Link className='btn btn-accent' href='https://wa.link/3qb8g3' target="_blank">Bargain </Link>

          </div>
        </div>


        <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
          <div className='flex justify-end mx-5 gap-2'>
            <button className="btn">
            Faj 
              <div className="badge">70k</div>
            </button>
            <Link className='btn btn-accent' href='https://wa.link/3qb8g3' target="_blank">Bargain </Link>

          </div>
        </div>


        <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
          <div className='flex justify-end mx-5 gap-2'>
            <button className="btn">
            Moremi block 
              <div className="badge">60k</div>
            </button>
            <Link className='btn btn-accent' href='https://wa.me/message/2EU7DKQNESR5K1'target="_blank">Bargain </Link>

          </div>
        </div>

        <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
          <div className='flex justify-end mx-5 gap-2'>
            <button className="btn">
            Awo Normal block 
              <div className="badge">70k</div>
            </button>
            <Link className='btn btn-accent' href='https://wa.link/3qb8g3' target="_blank">Bargain </Link>

          </div>
        </div>

      </div>

    </div>
  );
};

export default BedSpace;
